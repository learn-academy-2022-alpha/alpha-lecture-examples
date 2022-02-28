// Parent Class: the Generic version of a class that has all the data and behavior that is common to all child classes
// Child Class: the specific version of the parent class that has features that other child classes do not. 
// extends: the key word to class inheritance in javascript
// super(): a method that calls upon the Parents constructor method and passess it arguments in the same order the super() recieved them. 

//          Class relationship tree
//                Animal
//                  / \
//            Mammal Reptile

class Animal {
  constructor(nameParam){
//    Data
//     v
    this.name = nameParam
    this.isAlive = true
    this.age = 0
  }
//  Behavior
//    v
  reproduce() {
    return `Make a bunch of little ${this.name}'s`
  }
  accident() {
    this.isAlive = false 
  }
  birthday() {
    this.age = this.age + 1
  }
}

let frogThing = new Animal("Mudskipper")

// console.log(frogThing)
// frogThing.birthday()
// console.log(frogThing)
// console.log(frogThing.reproduce())


//           New Key Word
//              v
class Reptile extends Animal {
  constructor(nameParamInTheChild, venomousParam){

//   New Key Word
//     v
    super(nameParamInTheChild)
    this.isVenomous = venomousParam
  }
  reptileInfo() {
    return `Your Reptile's name is ${this.name}. ${this.name} is ${this.age} years old. Is ${this.name} venomous? ${this.isVenomous} `
  }
}

let snek = new Reptile("Black Mamba", true)
let shellPower = new Reptile("Snapping Turtle", false)

// console.log(snek)
// console.log(shellPower)
// shellPower.birthday()
// console.log("turtle after the birthday", shellPower)
// console.log(shellPower.age) // <-- logging a key in an object to recieve the value
// console.log(shellPower.reptileInfo())


class Mammal extends Animal {
  constructor(name, aquaticTypeParam, fuzzyParam=true){
    super(name)
    this.isWarmBlooded = true
    this.isFuzzy = fuzzyParam
    this.isAquatic = aquaticTypeParam
  }

  movement() {
    if(this.isAquatic === true) {
      return "Just keep swimming"
    } else {
      return "you should hop through some fields"
    }
  }
}

let theCutest = new Mammal("Quokka", false)
console.log(theCutest)
theCutest.birthday()
console.log(theCutest.age)
console.log(theCutest.name ,theCutest.movement())