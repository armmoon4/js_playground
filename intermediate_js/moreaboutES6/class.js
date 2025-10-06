class Product {
    constructor(name, price, brand, owner) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.owner = owner;
    }

    details() {
        console.log(`name: ${this.name}, price: ${this.price}, brand: ${this.brand}, owner: ${this.owner}`);
    }
}

const product1 = new Product('Galaxy S21', 1000, 'Samsung', 'Alice');
const product2 = new Product('iPhone 13', 1200, 'Apple', 'Bob');    

product1.details(); // name: Galaxy S21, price: 1000, brand: Samsung, owner: Alice
product2.details(); // name: iPhone 13, price: 1200, brand: Apple, owner: Bob       


