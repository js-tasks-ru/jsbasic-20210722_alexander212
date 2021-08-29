export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) {
      return;
    }
    let isContain = false;
    if (this.cartItems.length >= 1) {
      this.cartItems.forEach((i) => {
        if (i.product.id === product.id) {
          i.count += 1;
          isContain = true;
        }
      });
    }
    if (!isContain) {
      this.cartItems.push({
        product,
        count: 1,
      });
    }
    console.log(this.cartItems)
  }

  updateProductCount(productId, amount) {
    this.cartItems.forEach((item, index) => {
      if (item.product.id === productId) {
        const count = item.count + amount;
        if (count <= 0) {
          this.cartItems = [...this.cartItems.slice(0, index), ...this.cartItems.slice(index + 1,)];
        } else {
          item.count = count;
        }
      }
    });
    console.log(this.cartItems)
  }

  isEmpty() {
    return this.cartItems.length > 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((acc, item) => {
      return acc + item.product.price * item.count;
    }, 0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

