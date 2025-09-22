// services.js

// 1.A class is like a blueprint for creating objects-----A SIMPLE CLASS
class UserService {
  constructor(name, email) {
    this.name = name;   // properties
    this.email = email;
  }

  // a method (function inside a class)
  getUserInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

// create objects (instances) from the class
const user1 = new UserService("Nurain", "nurain@example.com");
console.log(user1.getUserInfo()); // 👉 Name: Nurain, Email: nurain@example.com


// 2. ENCAPSULATION
class BankAccount {
  #balance = 0; // private field (cannot be accessed directly outside)

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  get balance() {
    return this.#balance; // controlled way to access private data
  }
}

const acc = new BankAccount("Nurain");
acc.deposit(100);
acc.withdraw(40);
console.log(acc.balance); // 👉 60
// acc.#balance ❌ error (because it's private)


// 3: Inheritance

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    return `${this.brand} is moving...`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // call parent constructor
    this.model = model;
  }

  drive() {
    return `${this.brand} ${this.model} is driving fast!`;
  }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.drive()); // 👉 Toyota Corolla is driving fast!

// 🟢 4: Polymorphism
class Animal {
  speak() {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof! Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach(a => console.log(a.speak()));
// 👉 Woof! Woof!
// 👉 Meow!
// 👉 Some generic sound


// 🟢 5: Abstraction (with Interfaces in JS-like style)
class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented!");
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const s = new Square(4);
const c = new Circle(3);

console.log("Square area:", s.area()); // 👉 16
console.log("Circle area:", c.area()); // 👉 28.27


// 🔑 Summary (OOP pillars in JavaScript)

// Encapsulation → private fields, getters/setters.

// Abstraction → hide details, expose only what’s necessary.

// Inheritance → child class reuses parent class.

// Polymorphism → same method, different behavior.
