class ProductManager {
  constructor() {
    this.products = [];
    this.prevId = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!(title && description && price && thumbnail && code && stock)) {
      console.error("Todos los campos son obligatorios.");
    }

    for (const product of this.products) {
      if (product.code === code) {
        console.error("El código de producto ya está en uso.");
      }
    }

    const product = {
      id: this.prevId + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
    this.prevId++;
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId) {
    for (const product of this.products) {
      if (product.id === productId) {
        return product;
      }
    }

    console.error("Producto no encontrado.");
  }
}

const manager = new ProductManager();


manager.addProduct(
  "producto prueba",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

const products = manager.getProducts();
for (const product of products) {
  console.log(product);
}

const productId = 1;
const product = manager.getProductById(productId);
console.log(`Producto con ID ${productId}:`, product);
