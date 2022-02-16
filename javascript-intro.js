// JavaScript Lecture 2/16/22

// Cloned the Repo
// Made a branch
// Made a new file with the extension of .js

// To run the JS file: node javascript-intro.js

// JavaScript is a Dynamically Typed Languge 
// JavaScript is an Interperted Languge 
// JavaScript is a Scripting Languge 


// Data Types
  // Primitive Data Types
    // Numbers
      // Integer  
        42
        21
        13
        420
      // Float
        3.14159
        4.20

        4 + 5
        5 - 3
        5 * 3
        6 / 3
        6 % 2
// Logging to the Console
        // console.log(4 + 5)
        // console.log(6 / 3)
        // console.log(6 % 2)

    // Strings
      "Hello World"
      // console.log("Hello World")
      "Aloha"
      // console.log("A" + "L", "O", "H", "A")
      "42"
      // console.log("Aloha 23 Alpha Students 🏖") 
      // String Concatenation 
        // console.log("Hell" + "o")
        // console.log("Hello " + "World")
      // String Concatenation  & Type Coercion 
        // console.log("22" + 22) 


    // Boolean
      true
      false
      // Equality Operators
        // Loose Equality ==
          3 == "3"
          // console.log(4 - 1 == "3") 
          // console.log(3 == "3") 
          // console.log(true == true) 
          // console.log(true == false) 
          // console.log(true == "true")
        // Strict Equality ===
          // console.log(4 - 1 === 3) 
          // console.log(true === false) 

      // Relational Operators 
        // greater than
        // console.log(2 > 0) 
        // // less than
        // console.log(2 < 0) 
        // // greater than or equal to
        // console.log( 0 >= 2) 
        // // less than or equal to
        // console.log(-4 <= 0.8) 
      
      // Logical Opperator 
        // and &&
          // console.log(true && true) 
          // console.log(false && true) 
          // console.log(2 > 0 && 0 > 5) 
          // console.log(false && false)
        // or ||
          // console.log(true || true) 
          // console.log(false || true) 
          // console.log(2 > 0 || 0 > 5) 
          // console.log(2 < 0 || 0 > 5) 
          
        // not !
        // console.log(!true) 
        // console.log(!false) 
        // console.log(true !== false) 
        // console.log(false !== !false) 
        // console.log(!(true && false)) 

    // Undefined
      // undefined is a value that has not yet been assigned
      undefined
      console.log(undefined) 
    // Null
      null
      // null is not equal to anything else in your program
      // console.log(0 === null) 
      // console.log(false === null) 
      // console.log(null === null) 
    // Symbol
      // symbols are used for accessing keys in Javascript objects 
      // :key

  // Type Coercion 
  //  console.log("2" + 2) 
  //  console.log(!3) 
  //  console.log(!0) 
  //  console.log(true * 9) 
  // console.log(false * 9) 

  // Variables 

  // Variables have 4 pieces
    // variable declaration
    // var
    // variable name - 
      // camelCase
      // thisIsMyCamelCaseSentence
      // var theFirstNumberInMyTest
      // var num
    // the assignment operator
      // =
    // data
      var num = 42

      // console.log(num)

      var coolerNumber = 420

      // console.log(coolerNumber)

      // console.log(num + coolerNumber)

      num = null
      // console.log(num)
      num = "hello"
      // console.log(num)
      

//  String Methods and String Properties
  // strings have length
    // console.log ("Hello World".length)

  // strings have index
    // console.log("Hello World"[0])
    // console.log("Hello World"[1])
    // console.log("Hello World"[2])
    // console.log("Hello World"[3])
    // console.log("Hello World"[4])

  // String Methods 
    // method(argument)
    var greeting = "hello"

    // Make this variable upper case
    console.log(greeting.toUpperCase())

    // finding a character at a particular index
    console.log(greeting.charAt(2))

    // finding the index of the first character
    console.log(greeting.indexOf("l"))

    // does my string inclued a subset of characters inside of it
    console.log(greeting.includes("hell"))

    // give me a subset of characters from my string
    console.log(greeting.slice(1,3))