// JavaScript Objects 2/24/2022

// Primitive datatypes - string, number, Boolean, undefined, null, symbol

// Arrays - collection of data
let myArray = [4, 5, 6, 7]
// extracting a single value by the index
// console.log(myArray[2]) --> 6

// Objects - data type that holds collections of data

// {key: "value"}

// Symbol - unique identifier, key in an object

// {key1: "value1", key2: "value2", key3: "value3"}

// Best practice to drop onto multiple lines

let myObject = {
  key1: "value1",
  key3: "value3",
  key2: "value2"
}

// console.log(myObject)
// console.log(myObject.key2) --> "value2"

// nested object (object in an object)
let breakfast = {
  item1: "avocado toast",
  item2: "egg",
  item3: "waffles",
  item4: {
    bev1: "coffee",
    bev2: "tea",
    bev3: "orange juice",
    bev4: "milk",
    bev5: {
      flavor1: "orange",
      flavor2: "pomegranate",
      flavor3: "pineapple",
      flavor4: "grapefruit"
    }
  }
}
// console.log(breakfast.item4.bev5.flavor2)
// console.log(flavor2) --> error

// Destructuring - creating a special type of variable that exposes a key inside an object, create a shortcut to a key inside an object

let {flavor2, flavor1, flavor3, flavor4} = breakfast.item4.bev5
// console.log(flavor2)
// console.log(flavor1)
// console.log(flavor3)
// console.log(flavor4)



// Methods
// Built-in methods - .push()

// Method - function/action that belongs to object

let numberObject = {
  num1: 5,
  num2: 10,
  num3: 20,
  addUp: function(){
    return this.num1 + this.num2 + this.num3
  }
}
// this - a refernce to the object when you are inside said object
// console.log(numberObject)
// console.log(numberObject.num1)

// console.log(numberObject.addUp) --> [Function: addUp]

// Create and execute a method - function that belongs to an object
// console.log(numberObject.addUp())
// console.log(addUp()) --> ReferenceError: addUp is not defined


// Higher-order Functions!!!

// let pets = [{name: "Pascal", type:"cat", age: 1}, {name: "Hieronymus", type: "cat", age: 11}, {name: "Appa", type: "dog", age: 1}, {name: "Larry", type: "lizard", age: 14}]

let pets = [
  {name: "Pascal", type:"cat", age: 1},
  {name: "Hieronymus", type: "cat", age: 11},
  {name: "Appa", type: "dog", age: 1},
  {name: "Larry", type: "lizard", age: 14}
]
// console.log(pets[1]) --> { name: 'Hieronymus', type: 'cat', age: 11 }
// console.log(pets[3].name) --> Larry

// Prompt - create a function that will take in array of pet objects and will return an array of only the pet's names
// console.log(pets.length)

// create function
// iterate - map

// each time we iterate, value is an object
const petNames = (array) => {
  return array.map(value => {
    return value.name
  })
}
console.log(petNames(pets))
// --> [ 'Pascal', 'Hieronymus', 'Appa', 'Larry' ]
