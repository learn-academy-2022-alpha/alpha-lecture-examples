// Jest - javascript testing framework that verifies the accuracy of JS codebase

// yarn - a package manager for your code, allows sharing with other developers

// Test Driven Development - TDD - breaks code into a series of tests, smaller problems to approach

// Red-green refactor process
// 1. Write the test
// a describe method that lists the name of the function
describe("greeting", () => {
  // a test/it method, nested in the describe block, that explains what the function does
  it("returns a string that says Aloha, Alpha2022!!!", () =>{
    // invoke the expect method, providing an argument of the function call and expected output
    expect(greeting()).toEqual("Aloha, Alpha2022!!!")
  })
})

// 2. Run the test (Red-Good failure)
// $yarn add jest
// $yarn jest <file name>

// 3. Write the code
// create a function named greeting
// no parameters required
// return the string Aloha, Alpha2022!!!

const greeting = () => {
  return "Aloha, Alpha2022!!!"
}

// 4. Run the test again (Green-pass)
// 5. Refactor optional

// Sometimes VS code adds some helper code "yargs" for jest describe method and you may see the following code appear at the top of your screen after you run a test in your suite:
// const { expect } = require("@jest/globals")
// const { it } = require("jest-circus")
// const { describe } = require("yargs")
//comment those lines out then run your test again

// We don't comment out the old tests and function. We leave those there, as the purpose of having tests is so that they are AUTOMATED. We simply keep the original code and tests and keep writing new ones below those.

// Conditionals
// Write a test for a function that logs "stay inside" if it is raining, if not "go outside"
// Test to get good red failure
// describe method with function name
// it method states what the function does
// expect with function call, matcher, and expected output
describe("didItRain", () => {
  it("returns a string that says stay inside if it is raining, if not go outside", () => {
    expect(didItRain("yes")).toEqual("stay inside")
    expect(didItRain("no")).toEqual("go outside")
  })
})

// function to get green pass
// create a function didItRain
// conditonal that state stay inside if it is raining, if not go outside
// use equality operators

const didItRain = (string) => {
  if(string === "yes") {
    return "stay inside"
  } else {
    return "go outside"
  }
}

// Variables 
// Sometimes it can be useful to create variables within our test method for use later on in our expect methods. These variables are only available within the scope of the specific test it has been created in.

// Write a function that take in two arrays adds the second array to the end of the first array.

// test that gets good red failure
// describe method with function name
// it method states what the function does
// expect with function call, matcher, and expected output

describe ("addBreaks", () => {
  it("that adds take breaks to the end of an array", () =>{
    var developerList = ["take notes", "pay attention", "practice", "pray", "pair program", "drink water", "cry"]
    var moreStuff = ["take breaks"]
    var result = ["take notes", "pay attention", "practice", "pray", "pair program", "drink water", "cry", "take breaks"]
    expect(addBreaks(developerList, moreStuff)).toEqual(result)
  })
})
// We can see here, utilizing variables for our arrays, that it keeps our code cleaner and easier to understand and read, versus having to put these huge arrays into the argument parentheses as shown on the lines below. 
// expect(addBreaks(["take notes", "pay attention", "practice", "pray", "pair program", "drink water", "cry"], ["take breaks"])).toEqual(["take notes", "pay attention", "practice", "pray", "pair program", "drink water", "cry", "take breaks"])

// function that gives a green pass
// declare function called addBreaks
// use .concat() to add the parameters together
// return the combined lists

const addBreaks = (array1, array2) => {
  return array1.concat(array2)
}

// The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose. Write the test FIRST, see it fail, then write the code to make it PASS.
// Minimum steps for pseudocode - name of function, parameters you are using, expected output, methods and/or operators you are using 
// Make sure the function name and expected output match in the test and function.
// Variables and parameters are hardcoded in the test. Parameters are dynamic in the function.
// Console.log is not needed for the test suite because the function is being called in the expect method of the test.