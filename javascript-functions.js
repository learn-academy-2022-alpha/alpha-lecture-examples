// JavaScript Functions 2/18/22

// () => {}
// functions are little machines that we create 


// variable syntax can assign a variable to data
var myName = "Austin"


// variable syntax can assign a variable to a function
const myFunction = () => {}

// Anatomy of a function
  // Variable Declaration -> const
  // Variable Name -> anythingIWantItToBe
      const anythingIWantItToBe = () => {}
      const youWouldntBelieveIt = () => {}
      const mileyCyrus = () => {}
      const iCantBelieveItsNotButter = () => {}
  // Assignment opperator -> =
  // Parenthese -> ()
    //can take a placeholder for data called a parameter
    // const myFunction = (parameter) => {}
  // Arrow -> =>
  // Curly Brackets/ code block -> { code block }
  // Return -> the output of the function


const alpha = () => {
  return "Hello Alpha"
}

// Function Invocation

//   console.log(alpha());

// for(let i = 0; i < 8; i++) {
//   console.log(alpha());
// }

// const psuedoFunction = (parameter) => {
//   < executable code goes here>
//   return <final result>
// }

// const donutMachine = (doughType) => {
//   return `A ${doughType} donut is made`
// }

// console.log(donutMachine("plain"))
// console.log(donutMachine("ube"))
// console.log(donutMachine("Apple Fritter"))
// console.log(donutMachine("Voodoo"))

// Pseudo Code
// donut maker pseudo code 
// Input of donutMachine should be: what kind of donuts, and how many donuts.
// Output of donutMachine: a string that says "you ordered x number of y kind of donuts". 
// Edge Cases: if you order a dozen its discounted by a couple of $. cannot order negative donuts
// icebox :buying one or multiple kinds of donuts, counting how many you have left. mod for all dozens someone orders

// create a function called donutMachine
// donutMachine should take in two parameters: donutType, donutNumber
// set up a conditional for if someone orders 12 donuts
// conditional if someone orders negative donuts
// catch all for someone ordering any positive number of donuts at $1 per donut
// return a string for each condition that is appropriate 


const donutMachine = (donutType, donutNumber) => {
  if(donutNumber === 12){
    return `You ordered a dozen donuts of ${donutType}. That'll be $10`
  }
  else if(donutNumber <= 0){
    return "Hey we don't sell negative donuts here"
  }
  else {
    return `You ordered ${donutNumber} of ${donutType}. That'll cost you $${donutNumber}.`
  }
}


console.log(donutMachine("Apple Fritter", 24))
console.log(donutMachine("Glazed", 630))
console.log(donutMachine("Voodoo", 2022021811022359))

// function : a small machine that we create to handle code process / logic that can be called into action.
// encapsulation : making sure our functions only have access to data that is being passed in via the parameter
// arrow syntax : Syntax that was added to the JavScript code base with ES6
// function expresson : assigning a function a name and the variable declaration const
// const : a variable declaration that does not allow the code to be altered
// function invocation / function call : using the name of the function to activate the code and recieve an output. 
// code block : a set of compuatational instructions placed iniside of curly brackets {}
// return : a javascript keyword that ends the function and outputs some kind of data from the function, w/o a return keyword the function will give us back ~undefinded~ 
// parameter : a placeholder that is declared in the parentheses
// argument : the data passed into the function upon it's invocation
// algorithm : a function that takes in data and process the data for specific outputs under different scenarios. 
// function signature : The input and output of the function
// pseudocoding : the process breaking down, and writing out in plain language complex functions. It includes planning out the inputs, expected outputs, and expected tools to use. 