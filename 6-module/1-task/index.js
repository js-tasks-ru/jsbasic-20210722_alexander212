/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.createBody(rows);
  }

  createRow(row) {
    const container = document.createElement('tr');
    const keys = Object.keys(row);
    for (let i = 0; i <= keys.length; i += 1) {
      const cell = document.createElement('td');
      if (i < keys.length) {
        cell.textContent = row[keys[i]];
      } else {
        const btn = document.createElement('button');
        btn.textContent = 'x';
        cell.append(btn);
      }
      container.append(cell);
    }
    
    return container;
  }

  createHead() {
    const container = document.createElement('tr');
    const coll = ['Имя', 'Возраст', 'Зарплата', 'Город'];
    for (let i = 0; i <= coll.length; i += 1) {
      const cell = document.createElement('td');
      if (i < coll.length) {
        cell.textContent = coll[i];
      }
      container.append(cell);
    }
    return container;
  }

  createBody(template) {
    const container = document.createElement('table');
    const head = document.createElement('thead');
    const body = document.createElement('tbody');
    head.append(this.createHead());
    container.append(head);
    for (let value of template) {
      body.append(this.createRow(value));
    }
    container.append(body);
    container.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const row = e.target.closest('tr');
        row.remove();
      }
    });
    return container;
  }

}
