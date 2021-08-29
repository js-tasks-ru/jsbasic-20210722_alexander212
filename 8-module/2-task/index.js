import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();
  }

  render() {
    this.elem = createElement(`<div class="products-grid">
    <div class="products-grid__inner">
    </div>
    </div>`);
    this.elem.querySelector('.products-grid__inner').append(this.createProducts(this.products));
  }

  createProducts(products) {
    const container = document.createDocumentFragment();
    products.forEach((product) => {
      const newProduct = new ProductCard(product);
      container.append(newProduct.elem);
    });
    return container;
  }

  updateFilter(filters) {
    const container = this.elem.querySelector('.products-grid__inner');
    this.filters = {...this.filters, ...filters};
    const keys = Object.keys(this.filters);
    let result = this.products.filter((p) => {
      for (let key of keys) {
        switch (key) {
        case 'noNuts':
          if (!p['nuts']) {
            break;
          }
        case 'vegeterianOnly':
          if (p['vegeterian']) {
            break;
          }
        case 'maxSpiciness':
          if (p['spiciness'] <= this.filters[key]) {
            break;
          }
        case 'category':
          const categoryFilter = this.filters[key];
          if (!categoryFilter) {
            break;
          } else if (p['category'] === this.filters['category']) {
            break;
          }
        default:
          return false;
        }
      }
      return true;
    });
    container.innerHTML = '';
    container.append(this.createProducts(result));
  }
}
