// JavaScript Loops 2/17/22
// iteration : Repeating a set of computational procedures a specified number of times 
// for loop: a tool for itteration in JavaSccript
// let: local scope variable, like var it declares a new variable-- but it is not accessible to other code blocks
// i (index): a location in an array or string
// value: a piece of data at an index location 
// scope: When and how variables can be accessed
// local scope: variable is called within a code block with let or const
// global scope: is a variable called outside of a code block with var

//___________________________________
// structure of a for loop
// for(){}
//___________________________________
//  for(as long as this set up is true){keep doing this thing}
//___________________________________
// for(1. starting Point; 2. ending condtion ; 3. how to respond to each itteration){
//   code block
// }

//incrementation
// for(let index = 0; index < 10; index++){
//   console.log(index)
//   console.log("paula");
// }

// for(let index = 0; index < 1000; index++){
//   console.log(index)
// }

//___________________________________
// decrementation
// for(let i = 10; i >= 0; i--){
//   console.log(i);
// }
//___________________________________


//                  0         1       2       3         4       5       6     7       8           9
// var arrayRhyme = ["ring", "around", "the", "rosie", "pocket", "full", "of", "posie", "ashes", "ashes", "we", "all", "fall", "down"]

// for(let i = 0; i < arrayRhyme.length; i++){
//   console.log(arrayRhyme[i]);
// }

//___________________________________
// for(let index = 0; index < 1000; index){
//   console.log(index)
// }
//___________________________________
// var myArr = [10, 20, 30]
//     //index  0   1   2
//     //length 1   2   3  

// for(let i = 0; i < myArr.length; i++){
//   console.log(myArr[i] * 13)
// }
//___________________________________
// for loop with conditionals 

// var randomNums = [420, 7, 10, 69, 32, 5]

// for(let i = 0; i < randomNums.length; i++){
//   if(randomNums[i] % 2 !== 0){
//     console.log("the number is odd");
//   } else {
//     console.log("the number is even");
//   }
// }

//___________________________________
// for loop with string interporlation / template literal
// var randomNums = [420, 7, 10, 69, 32, 5]

// for(let i = 0; i < randomNums.length; i++){
//   if(randomNums[i] % 2 !== 0){
//     console.log(`the number ${randomNums[i]} is odd`);
//   } else {
//     console.log("the number is even");
//   }
// }

//___________________________________
//for loop with a weird variable name

// for(let banana = 0; banana < 10; banana++){
//   console.log("Hello World");
// }

//___________________________________
// iterating through a string
// let words = "Sheldon the cute pupper"

// for(let letterIndex = 0; letterIndex < words.length; letterIndex++){
//   console.log(words[letterIndex])
// }
//___________________________________

for(let i = 0; i < 1600; i++){
  if(i % 15 === 0){
    console.log("EVERYBODY");
  } else {
    console.log("SHOTS");
  }
}
