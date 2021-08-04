function highlight(table) {
  const collTbodyTr = table.tBodies[0].rows;
  const collHeadTr = table.tHead.rows[0].cells;
  console.log(collTbodyTr)
  let indexCellStatus;
  let indexCellGender;
  let indexCellAge;

  for (let i = 0; i < collHeadTr.length; i += 1) {
    const content = collHeadTr[i].textContent.toLowerCase();
    if (content === 'status') {
      indexCellStatus = i;
    } else if (content === 'gender') {
      indexCellGender = i;
    } else if (content === 'age') {
      indexCellAge = i;
    }
  }
  for (let i = 0; i < collTbodyTr.length; i += 1) {
    const dataAvailable = collTbodyTr[i].cells[indexCellStatus].dataset.available;
    const gender = collTbodyTr[i].cells[indexCellGender].textContent;
    const isAdult = collTbodyTr[i].cells[indexCellAge].textContent > 18;
    if (dataAvailable === 'true') {
      collTbodyTr[i].classList.add('available');
    } else if (dataAvailable === 'false') {
      collTbodyTr[i].classList.add('unavailable');
    } else {
      collTbodyTr[i].setAttribute('hidden', true);
    }
    if (gender === 'm') {
      collTbodyTr[i].classList.add('male');
    } else if (gender === 'f') {
      collTbodyTr[i].classList.add('female');
    }
    if (!isAdult) {
      collTbodyTr[i].setAttribute('style', 'text-decoration: line-through');
    }
  }

}
