"use strict";
// TS_tasks.ts
// ---------------------------------- Task 1 ---------------------------------- //
/* DESCRIPTION:
Write a function named `squareNumber` that takes a number as an argument and returns its square.
Ensure the argument is typed as a number.
*/
// YOUR CODE HERE
// const squareNumber = (n:number):number => n*n;//with return type
const squareNumber = (n) => n * n;
// TEST
console.log(squareNumber(5)); // Expected output: 25
console.log(squareNumber(2.5)); // Expected output: 6.25
// ---------------------------------- Task 2 ---------------------------------- //
/* DESCRIPTION:
Write a function named `isOdd` that takes a number as an argument and
returns true if the number is odd, and false if it is even. Type the argument correctly.
*/
// YOUR CODE HERE
// const isOdd = (n: number): any => (n % 2);//If we don't want ternary
const isOdd = (n) => n % 2 ? true : false; // If we want to return boolean
// TEST
console.log(isOdd(5)); // Expected output: true
console.log(isOdd(4)); // Expected output: false
// ---------------------------------- Task 3 ---------------------------------- //
/* DESCRIPTION:
Create a class `Car` with the following properties:
  - `make`: a string representing the car's make.
  - `model`: a string representing the car's model.
  - `year`: a number representing the car's manufacturing year.
Add a method `getCarInfo()` that returns a string with the car's details.
*/
// YOUR CODE HERE
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
// TEST
const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1.getCarInfo()); // Expected output: "2020 Toyota Corolla"
// ---------------------------------- Task 4 ---------------------------------- //
/* DESCRIPTION:
Create a class `Person` with the following properties:
  - `firstName`: a string.
  - `lastName`: a string.
  - `age`: a number.
Add a method `introduce()` that returns a string introducing the person by their full name and age.
*/
// YOUR CODE HERE
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
    }
}
// TEST
const person1 = new Person("Alice", "Johnson", 30);
console.log(person1.introduce()); // Expected output: "Hi, I'm Alice Johnson, and I'm 30 years old."
class Dog {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    speak() {
        return `${this.name} says ${this.sound}!`;
    }
}
// // TEST
const dog1 = new Dog("Buddy", "woof");
console.log(dog1.speak()); // Expected output: "Buddy says woof!"
class Manager {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getDetails() {
        return `${this.name} is a ${this.position} and earns ${this.salary} annually.`;
    }
}
// TEST
const manager1 = new Manager("Sarah", "Project Manager", 75000);
console.log(manager1.getDetails()); // Expected output: "Sarah is a Project Manager and earns $75000 annually."
