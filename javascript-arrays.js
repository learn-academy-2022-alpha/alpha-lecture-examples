// WHAT ARE ARRAYS?
    // Arrays are a non-primitive data type that store collections of ordered data. 

    // Arrays contain any type of information as long as it is a valid data type

    // An array consists of the elements inside of brackets [ ], each element has a value that is separated by a comma.  

    // Each element is also indexed to track it’s placement inside the array starting with 0.  This is called zero indexed which means the first element in the array has an index of 0, the second element in the array has an index of 1 and so on.

// ACCESSING SPECIFIC VALUES INSIDE ARRAY:
    // While storing data in arrays is important, it is even more important that we are capable of accessing specific values within the array.  Because we have a value that has a specific index it is attached to, we can retrieve a specific value by calling on it's index

var learnStaff = ["Sarah", "Chelsea", "Austin", "Elyse"]

console.log(learnStaff[0])
//  Accesses the first value in the array by wrapping the index with a bracket to let javascript know I am accessing an index
// // Output: "Sarah"

console.log(learnStaff[1])
//  Accesses second value in array
//  Output: "Chelsea"

//  If index does not exist, output is undefined
console.log(learnStaff[8])
// // Output: undefined


// CHANGING ELEMENTS
  // While storing data in arrays is important, it is even more important that we are capable of accessing specific values within the array.  Because we have a value that has a specific index it is attached to, we can retrieve a specific value by calling on it's index

learnStaff = ["Sarah", "Chelsea", "Austin", "Else"]

console.log(learnStaff)
// Output: [ 'Sarah', 'Chelsea', 'Austin', 'Else' ]

learnStaff[3] = "Elyse"
//  Access the third index and reassign it's value
console.log(learnStaff)
// Output: [ 'Sarah', 'Chelsea', 'Austin', 'Elyse' ]


//  LENGTH PROPERTY
    //  We can tell how many elements are in an array by using the length property.  Since the array is zero-indexed, the length will always equate to the last index of the array plus one.

learnStaff = ["Sarah", "Chelsea", "Austin", "Elyse"]

// To find length we access the variable name and add .length which will return an integer
console.log(learnStaff.length)
// Output: 4


// BUILT-IN METHODS:
    // Built in methods are pieces of functionality that the programming language has available to perform common tasks to either access or modify our data stored in the variable

    // Often times a built in method will need more information to perform it's task.  We can pass this needed information in parathesis after the method name which is an arguement.

    // There are two catagories of built in methods: Mutators and Accessors


// MUTATORS: "setter method" will change the array in some way
    // When using mutators, sometimes the output of the method action is not going to be the array.

// .push(value)
    // Adds a value onto end of an array
    // Value is added by being passed as an arguement
    // Output of this method is the length of the new array

learnStaff = ["Sarah", "Chelsea", "Austin", "Elyse"]

console.log(learnStaff.push("Charlean"))
// Output: 5
// Our output is 5 since this is the return of the method itself.

// To get the array, we can now call on the array which was mutated with the .push built in method
console.log(learnStaff)
// Output: [ 'Sarah', 'Chelsea', 'Austin', 'Elyse', 'Charlean' ]



// .pop()
    // Removes the last value in an array and returns the value that was just removed
    // Nothing needs to be passed as an argument

learnStaff = ["Sarah", "Chelsea", "Austin", "Elyse"]

console.log(learnStaff.pop())
// Output: "Elyse"
// Our output is "Elyse" since this is the value that was just removed

// To get the array, we call on the mutated array
console.log(learnStaff)
// Output: [ 'Sarah', 'Chelsea', 'Austin' ]

// If we try to pass an arguement, pop will still only remove the last element in the array
console.log(learnStaff.pop("Chelsea"))
// Output: "Austin"

console.log(learnStaff)
// Output: [ 'Sarah', 'Chelsea' ]


// .reverse()
    // Reverses the array and does not take an arguement

learnStaff = ["Sarah", "Chelsea", "Austin", "Elyse"]

console.log(learnStaff.reverse())
// Output: [ 'Elyse', 'Austin', 'Chelsea', 'Sarah' ]


// .sort()
  // Alphabetizes strings
  // Numbers are sorted based on additional information passed as an arguement

learnStaff = ["Sarah", "Chelsea", "Austin", "Elyse"]

console.log(learnStaff.sort())
// Output: [ 'Austin', 'Chelsea', 'Elyse', 'Sarah' ]

var numArray = [58, 93, 405, 20]

console.log(numArray.sort())
// Output: [ 20, 405, 58, 93 ]
// Sorts numbers based on the first character of the number (2, 4, 5, 9)

var numArray = ["58", "93", "405", "20"]

console.log(numArray.sort())
// Output: [ '20', '405', '58', '93' ]
// The same applies if the numbers are strings

// To sort numbers in numerical order, we need to pass a function (more on this later) as an arguement
var numArray = [58, 93, 405, 20]

console.log(numArray.sort((a, b) => a - b))
// Output: [ 20, 58, 93, 405 ]



// ACCESSORS: "getter method" retrieves a portion of data and does not modify the array. To keep the output, it will need to be stored seperately as a variable

// .indexOf() 
    // Returns the index number of the first instance of the value.

learnStaff = ["Sarah", "Austin", "Chelsea", "Austin", "Elyse", "Austin"]

console.log(learnStaff.indexOf("Austin"))
// Output: 1
// Index 1 is the first instance of the value "Austin"

// Return will be -1 if the value does not exist in the array
console.log(learnStaff.indexOf("Ostin"))
// Output: -1

// To store this index number for future use, we can set it as a variable and console log the variable
var ostinIndex = learnStaff.indexOf("Ostin")
console.log(ostinIndex)
// Output: -1



// .slice()
    // Creates a subset of the array
    // Takes the arguement of the index that starts the subset and an optional arguement to end subset. 

learnStaff = ["Sarah", "Chelsea", "Austin", "Elyse", "Charlean", "Beau"]

console.log(learnStaff.slice(2))
// Output: [ 'Austin', 'Elyse', 'Charlean', 'Beau' ]

console.log(learnStaff.slice(2, 4))
// Output: [ 'Austin', 'Elyse' ]
// We are setting the start of the subset to 2 and creating a limit of 4 so we end on index 3

// We can see that our original array remains the same by console logging the original array
console.log(learnStaff)
// Output: [ 'Sarah', 'Chelsea', 'Austin', 'Elyse', 'Charlean', 'Beau' ]

var alphabet = ["a", "b", "c", "d", "e", "f", "g"]

var slicedAlphabet = alphabet.slice(1, 4)

console.log(alphabet)
// Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g']

console.log(slicedAlphabet)
// Output: ['b', 'c', 'd']

slicedAlphabet = alphabet.slice(1, 7)

console.log(slicedAlphabet)
// Output: ['b', 'c', 'd', 'e', 'f', 'g']

slicedAlphabet = alphabet.slice(1)
console.log(slicedAlphabet)
// Output: ['b', 'c', 'd', 'e', 'f', 'g']
// This has the same as the previous console log


// .concat()
    // Merges two arrays together
    // Can also be used to add value to array without mutating

var alphaTeam = ["Sarah", "Austin", "Charlean"]
var bravoTeam = ["Sarah", "Beau", "Elyse"]

console.log(alphaTeam)
// Output: [ 'Sarah', 'Austin', 'Charlean' ]
console.log(bravoTeam)
// Output: [ 'Sarah', 'Beau', 'Elyse' ]

var instructionTeam = alphaTeam.concat(bravoTeam)
console.log(instructionTeam)
// Output: [ 'Sarah', 'Austin', 'Charlean', 'Sarah', 'Beau', 'Elyse' ]

var instructionTeam = bravoTeam.concat(alphaTeam)
console.log(instructionTeam)
// Output: [ 'Sarah', 'Beau', 'Elyse', 'Sarah', 'Austin', 'Charlean' ]




// Strings to Arrays and Back Again
    //   In JavaScript, arrays and strings have a lot of similar properties. They both are a collection of items, both have a length property, both are zero-indexed. But strings and arrays have many differences. It is often convenient to convert string into arrays and vice-versa.

// ARRAY TO STRING:
// .join()
    // Takes an arguement that determine what is in between each character in the string

var hello = ["hello", "Alpha", "class"]

console.log(hello.join(""))
// Output: "helloAlphaclass"

console.log(hello.join(" "))
// Output: "hello Alpha class"

console.log(hello.join("*"))
// Output: "hello*Alpha*class"



// STRING TO ARRAY:
// .split()
    // Takes an arguement of where to split the string determining what it is at each index in the array

var hello = "Hello Alpha Class!"

console.log(hello.split())
// Output: [ 'Hello Alpha Class!' ]

console.log(hello.split(""))
// Output: ['H', 'e', 'l', 'l', 'o', ' ', 'A', 'l', 'p', 'a', ' ', 'C', 'l', 'a', 's', 's', '!']

console.log(hello.split(" "))
// Output: [ 'Hello', 'Alpha', 'Class!' ]




// ARRAY DESTRUCTURING:
    // Destructing allows for individual assignment of array values to variables

var [firstName, lastName, superHero] = ["Bruce", "Wayne"]

console.log(firstName)
// Output: "Bruce"

console.log(lastName)
// Output: "Wayne"

// Because we do not have a value set in our array to superHero, we will get undefined
console.log(superHero)
// Output: undefined
