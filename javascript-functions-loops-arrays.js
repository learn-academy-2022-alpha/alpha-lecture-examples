// Create a function that multiplies each number in an array by 5

// Input: array of numbers
// Output: array of modified numbers (multiplied)

// var myArrayOfNums = [2, 3, 4, 5, 6]

// Output: [10, 15, 20, 25, 30]

// PSUEDOCODE:
// Create function
// Use for loop to iterate over each number (Iteration means repeat process until condition is met)
// Multiply each iteration by 5
// Store values in an array
// Return updated array


// const mult5 = (array) => {
//   return array * 5
// }

// console.log(mult5(myArrayOfNums))
// Output: NaN -- The above function returns NaN because we cannot multiply arrays.  Only numbers can be multiplied


// To access each individual value, we will use array[i] since i will stand for the index of the element on each iteration

// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
//   }
// }

// console.log(mult5(myArrayOfNums))
// Output: 2
// 3
// 4
// 5
// 6
// undefined
// This function logs each value inside our input array, however returns undefined because we never return anything from our function.



// var myArrayOfNums = [2, 3, 4, 5, 6]

// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i] * 5)
//   }
// }

// console.log(mult5(myArrayOfNums))
// Output: 
// 10
// 15
// 20
// 25
// 30
// undefined
// We updated our function to multiply our value by 5, however we still recieve undefined because we are not returning anything from our function

// Since a function has to return something, we will do a little refactor to return something

var myArrayOfNums = [2, 3, 4, 5, 6]

const mult5 = (array) => {
  for(let i = 0; i < array.length; i++) {
    return array[i] * 5
  }
}

console.log(mult5(myArrayOfNums))
// Output: 10
// We are no longer getting undefined which is great, but we are only getting our value on the first iteration.  This is because the return is the output of the function, and once the function has returned something it's work is finished.  

// Since we cannot return in the loop because that will end our iteration, we need to store these modified values from our for loop somewhere and return that once we have finished our for loop.

// We will do this by creating a variable assigned to an empty array, allowing us to push our new data into the empty array.  We can then return this new array outside of the for loop to return our desired output.

var myArrayOfNums = [2, 3, 4, 5, 6]

const mult5 = (array) => {
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 5)
  }
  return newArray
}

console.log(mult5(myArrayOfNums))
// Output: [ 10, 15, 20, 25, 30 ]
// This looks like our desired output!


// Create a function that takes a set of data and adds each item to a sentance

var coffees = ["cold brew", "chai latte", "esspresso", "mocha"]
var teas = ["green", "sweet", "sleepy time", "earl gray"]

// Input: array of strings
// Output: array of strings as sentances with each item

// PSUEDOCODE:
// Create a function that takes in an array
// Iterate through the array 
// Modify the string of each item
// Store new array of strings
// Return a new array

const coffeeOrder = (array) => {
  // Setting up an empty array to store modified values
  let orders = []
  // Creating for loop to iterate through array
  for(let i = 0; i < array.length; i++) {
    // Pushing interpolated string with current value to variable orders
    orders.push(`I would like a ${array[i]}`)
  }
  // Returning my variable orders with pushed values outside of for loop so loop does not terminate
  return orders
}

console.log(coffeeOrder(coffees))
// Output: [
//   'I would like a cold brew',
//   'I would like a chai latte',
//   'I would like a esspresso',
//   'I would like a mocha'
// ]

console.log(coffeeOrder(teas))
// Output: [
//   'I would like a green',
//   'I would like a sweet',
//   'I would like a sleepy time',
//   'I would like a earl gray'
// ]

console.log(coffeeOrder(["black coffee"]))
// Output: [ 'I would like a black coffee' ]

// Since we made the code dynamic by not hardcoding a specific variable in our function, rather passed a placeholder, we can use any array of strings for this function making it reusable and dynamic!

// The big picture takeaway is learning the process of manipulating data.  Taking a data set, manipulating it and returning a result in a controlled and expected way.