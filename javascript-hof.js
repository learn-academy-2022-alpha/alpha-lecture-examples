// JavaScript Higher Order Functions 2/22/22

// Built in method - Code snippet that has already been written so that we don't have to repeat it
  // .push() - mutators
  // .pop() 
  // .indexOf() - accessors
  // .toUpperCase()
// Syntactical Sugar - built-in methods make our coding experience sweeter 
  // Chrome browser and node desugar our built in methods
  // We have to follow specific conventions to allow for desugaring


// A super common error we run into while working with these methods
  // Uncaught TypeError: true.toUpperCase is not a function
    // This error means when have the wrong data type that we are working on.

// Built in methods only work on certain data types
  // .push() - array method
  // .charAt() - string method

// Itteration: Repeating a action or a set of actions a certain number of times or until a requirement is met 
  // What data types allow for itteration? 
    // String - "This string can be looped through"
    // Arrays - [1,"this", true, null]
      // both of these data types have length properties and they indexes

// Arrays - Predictable access & storage container for data

var dinoOne = "Blue Dino"
var dinoTwo = "Red Dino"
var dinoThree = "Purple Dino"


// var bowl = [dinoOne, dinoTwo]

// console.log(bowl[1]);
// bowl.push(dinoThree)
// console.log(bowl);

// Higher Order Functions - a subcatagory of built in methods that are only called on Arrays and they used for itteration

// HoF's are waayyyyyy more effecient than loops for computers to read. 
  // .forEach()
  // .map()
  // .filter()
    // HoF we've gone over in the past
    // .sort((a,b)=> a - b)

// .forEach()

// value is a built in parameter
// [dinoOne, dinoTwo, dinoThree, "Blue Dino", "Gray bunny"].forEach((value) => {
//   console.log(value);
//   return value
// })

// [dinoOne, dinoTwo, dinoThree, "Blue Dino", "Gray bunny"].forEach((batman) => {
//   console.log(batman);
//   return batman
// })
// forEach takes a second argument of index
// [dinoOne, dinoTwo, dinoThree, "Blue Dino", "Gray bunny"].forEach((value, index) => {
//   console.log(value)
//   console.log(index);
// })


// [dinoOne, dinoTwo, dinoThree, "Blue Dino", "Gray bunny"].forEach((moonKnight, deadPool) => {
//   console.log(moonKnight)
//   console.log(deadPool);
// })
// forEach's third Parameter is the array itself

// [dinoOne, dinoTwo, dinoThree, "Blue Dino", "Gray bunny"].forEach((value, index, array) => {
//   console.log(value)
//   console.log(index);
//   console.log(array);
// })

// var bowl = [dinoOne, dinoTwo, dinoThree, "Blue Dino", "Gray bunny"]

// bowl.forEach((value, index, array) => {
//   // console.log(value)
//   // console.log(index)
//   console.log(array)
//   // console.log("hey I'll do what you tell me to do as many times as you have items in the array")
// })

// forEach() takes three arguments in a particular order
// value - the value of the data at each index in the array 
// index - gives us the number (like 0 or 1) that represents the index location
// array - gives us the whole collection of data

// .map() - built in method, works on arrays, iterate over the array, takes value, index, and array as it's arguments and always return to us a seprate array of the same length 


// let multThree = numsArray.map((value) => {
//   return value * 3
// })
// let multThree = numsArray.map((value) => {
//   return value ** value
// })

// console.log(multThree)

// console.log([dinoOne, dinoTwo, dinoThree, "Blue Dino", "Gray bunny"].map((value) => {
//   return value + value
// }))
let numsArray = [2,3,4,5,6]


// let evenOrOdd = numsArray.map((value) => {
//   if(value % 2 === 0){
//     "even"
//   } else {
//     "not even"
//   }
// })
// output : [ undefined, undefined, undefined, undefined, undefined ]


// let evenOrOdd = numsArray.map((value) => {
//   if(value % 2 === 0){
//    return "even"
//   } else {
//    return "not even"
//   }
// })

// console.log(evenOrOdd);
// output: [ 'even', 'not even', 'even', 'not even', 'even' ]

// .filter() - Higher Order Function, iterates, acts on arrays, takes the three parameters: value,index,array. But italways trys to gives us a new array that is shorter than the original array. 

// filter is looking for a boolean value
  // when filter finds a boolean value it will return whatever is included and whatever is false will be ignored
  // filter has a built in conditional 

  // let myNumbers = [ 255, 678, 1000, 432, 764, 67]

  // let onlyOdds = myNumbers.filter(value => {
  //   return value % 2 !== 0
  // })

  // console.log(onlyOdds)

  // prompt: create a function that takes in an array and returns the word 'odd' for every odd number
  let myArrayOfStuff = [6, 4, 5, true, false, 1000, "hello", "yo", null, 5]
  // ["odd", "odd"]

  // create a function named findOdds (done)
  // parameter is going to be an array (done)
  // filter through the array using value as parameter (done)
  // filter out non numbers (done)
  // filter out evens (done)
  // create a new array that returns the word "odd" when there are odd numbers (done)
  
  const findOdds = (array) => {
    let oddNums = array.filter(value => {
      return typeof value === "number" && value % 2 !== 0
    })
    return oddNums.map(value => "odd")
  }

  console.log(findOdds(myArrayOfStuff))