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

// JavaScript Classes 2/28/2022

// classes are a template or recipe for objects

// PascalCase - like camelCase but the first letter is uppercased

// constructor - a built in method for classes to define class variables
// this - reference to the current class/object

// static data (variables) and behavior (methods)

// class DoingMath {
//   constructor() {
//     this.num1 = 5,
//     this.num2 = 10,
//     this.num3 = 15
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// new - creates an instance of a class (object that come from a class)
// instantiating the class (anaologous to invoking a function)

// const math = new DoingMath
// Output: DoingMath { num1: 5, num2: 10, num3: 15 }

// console.log(math)
// Output: DoingMath { num1: 5, num2: 10, num3: 15 }

// console.log(math.num1)
// Output: 5

// console.log(math.addUp())
// Output: 30

// const math2 = new DoingMath
// console.log(math2)
// Output: DoingMath { num1: 5, num2: 10, num3: 15 }


// Dynamic Values

// class DoingMath {
//   constructor(num1, num2, num3) {
//     this.num1 = num1,
//     this.num2 = num2,
//     this.num3 = num3
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }
// const math = new DoingMath
// Output: DoingMath { num1: undefined, num2: undefined, num3: undefined }

// const math = new DoingMath(5, 10, 15)
// console.log(math)
// Output: DoingMath { num1: 5, num2: 10, num3: 15 }
// const math1 = new DoingMath(5, 6, 7)
// console.log(math1)
// Output: DoingMath { num1: 5, num2: 6, num3: 7 }
// const math2 = new DoingMath(1, 2, 3)
// console.log(math2)
// Output: DoingMath { num1: 1, num2: 2, num3: 3 }

// new - calls the constructor method

// parameter vs argument:

// name - parameter, variable that belongs to a function/method
// "Alpha" - actual data that gets assigned to the parameter, which is called the argument

// const greeter = (name) => {
//   return `Hello, ${name}`
// }
// console.log(greeter())
// Hello, undefined

// var name
// console.log(name)
// Data type - undefined


// Mix and Match

class DoingMath {
  constructor(num2, num3) {
    this.num1 = 5,
    this.num2 = num2,
    this.num3 = num3
  }
  addUp() {
    return this.num1 + this.num2 + this.num3
  }
  largestNum() {
    return Math.max(this.num1, this.num2, this.num3)
  }
}
// const math = new DoingMath(9, 10)
// console.log(math)
// console.log(math.addUp())
// Output: 24
// console.log(math.largestNum())
// Output: 10

// Review
// - declare a class - keyword class
// - name convention - PascalCase
// - constructor - method for defining class variables
// - method and function - method is a function that belongs to an object
// - what is a class? - recipe for objects
// - how do you create an object - new ClassName

// Can't live in the arichectural drawing:
// console.log(DoingMath.addUp())
// Output: error