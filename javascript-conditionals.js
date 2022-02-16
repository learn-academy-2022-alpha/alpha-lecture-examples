// Conditonals
// Decision trees, if/else statements

//Evaluations
// Boolean --- true or false
//Three operators --- Equality, relational, logical

// Strict Equality ===
// var number = 7
// console.log(number === "7")

// Relational operator
{/* < > <= >= */}
// console.log(number < 10)

// Logical operator
// And ---> &&
// console.log(number > 10 && number < 20)

// Or ---> ||
// console.log(number > 10 || number < 20)

// Negation, Not, Opposite ---> Bang operator !
// console.log(!(number > 10 && number < 20))

// keyword if()
// Make a decision pass condition in ()
// Place executable code in {}

// keyword else()
// catch all
// var color = "green"
// if(color === "purple") {
//   console.log("You are a great person!")
// } else {
//   console.log("You are forgiven!")
// }

//keyword else if()
//adds additional conditions
// var color = "fuschia"
// if(color === "green") {
//   console.log("Go!")
// } else if(color === "yellow") {
//   console.log("Start pumping your brakes!")
// } else if(color === "red") {
//   console.log("Stop!")
// } else {
//   console.log("Pick red, yellow, or green.")
// }

// var color = "fuschia"
// if(color === "green"){console.log("Go!")} else if(color === "yellow") {console.log("Start pumping your brakes!")
// }else if(color === "red"){console.log("Stop!")} else {console.log("Pick red, yellow, or green.")
// }

// Javascript is read line by line. Place your most stringent condition on top

//In the following conditional statement, no one can make an "A" because the first conditional that is true is the condition that outputs 

var grade = 100

if(grade >= 75) {
  console.log("B")
} else if(grade >= 85) {
  console.log("A")
} else {
  console.log("C")
}

//However when the condition that outputs an "A" is evaluated earlier, then the most stringent condition will allow an "A" to be produced.
if(grade >= 85) {
  console.log("A")
} else if(grade >= 75) {
  console.log("B")
} else {
  console.log("C")
}