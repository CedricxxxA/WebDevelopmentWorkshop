class Product {
    constructor(productId, productName, productManager, developer) {
        this.productId = productId;
        this.productName = productName;
        this.productManager = productManager;
        this.developer = developer;
    }
}

const productList = [];

productList.push(new Product(
    "001",
    "Product A",
    "John Doe",
    "Alice Smith"
  ));
  
  productList.push(new Product(
    "002",
    "Product B",
    "Jane Doe",
    "Bob Johnson"
  ));
  
  productList.push(new Product(
    "003",
    "Product C",
    "Emily Brown",
    "David Wilson"
  ));
  