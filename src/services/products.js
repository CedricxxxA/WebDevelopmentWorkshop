class Product {
    constructor(productId, productName, productManager, developer, reports) {
        this.productId = productId;
        this.productName = productName;
        this.productManager = productManager;
        this.developer = developer;
        this.reports = reports;
    }
}

export const productList = [];

productList.push(new Product(
    "001",
    "Product A",
    "John Doe",
    "Alice Smith",
    "1234"
  ));
  
  productList.push(new Product(
    "002",
    "Product B",
    "Jane Doe",
    "Bob Johnson",
    "1234"
  ));
  
  productList.push(new Product(
    "003",
    "Product C",
    "Emily Brown",
    "David Wilson",
    "4321"
  ));
  