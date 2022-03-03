// JavaScript Classes 2/25/2025

// Primitive data types - string, number, Boolean, undefined, null, symbol

// Arrays - collection of data, where we can extract data from

// Classes are blueprints for objects

// Dynamic / hard coded

// hard coded:
// 2 + 2 

// Dynamic:
// num1 + num2 

// Function - as a blueprint for logic

// Object - hard code the values 

// Classes - are dynamic

// 'class' declaration - use "class" to declare 
// name convention - PascalCase
// static data - data types in JS, behavior - methods
// 'new' - keyword in JS, create a object from a class
// 'this' - keyword in JS
// Methods - actions that can be performed on objects - behavior
// Difference between functions and methods - methods are a function that belongs to a object/class

// Object Syntax
// const objectName = {
//   key1: value1,
//   key2: value2,
//   key3: value3
// };

// // Class Syntax
// class ClassName {
//   constructor() {
// 	this.key1  = value
// 	this.key2  = value
// 	this.key3  = value
// }
//   method_1() { ... }
//   method_2() { ... }
//   method_3() { ... }
// }

// Classes are a type of function
class User {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }

  sayHi() {
    console.log(this.name)
  }
}

let user1 = new User("John", 24)
let user2 = new User("Dasha", 31)
let user3 = new User("Becky", 4)

console.log(user1)
console.log(user2)
console.log(user3)
user1.sayHi()

// Output:  --> 
// User { name: 'John', age: 24 }
// User { name: 'Dasha', age: 31 }
// User { name: 'Becky', age: 4 }
// John