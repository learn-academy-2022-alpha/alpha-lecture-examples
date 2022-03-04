# React State

## Terminal commands to create a react application
Go to repository where you will be doing your react challenges. This repository will be the one you do all your git commands.
  - $ `cd react-challenges` 

Create a new branch. 
  - $ `git checkout -b <branch-name>`

`yarn create react-app` will bring in 1000s of code snippets to build your react application. This will be the only yarn command you run in this repository.
  - $ `yarn create react-app <app-name>`

Go inside the project folder. This will be the area you run all other yarn commands.
  - $ `cd <app-name>`

Open your text editor
Check that your react application is built correctly.
- $ `yarn start`

## Basic Structure of a Display Class Component
```javascript
// destructing Component from the React library
import React, { Component } from 'react'

// creating a class that extends the Component 
class App extends Component {
  
  // React lifecyle method that automatically runs
  render() {
    
    // every render needs a return
    // Everything included within the parenthesis of the return is where the JSX lives. JSX is a hybrid between js and html
    return (
      
      // React fragments wrapped around the markup to allow you to add as much markup as you want to appear on your webpage
      <>
        <h1>Alpha Web Developer Resources Tracker</h1>
        <p>Resources: 0</p>
        <button>Add a resource</button>
      </>
    )
  }
}

// every component must be exported to be used throughout the application
export default App
```

## Build your basic app
- Select the src folder in your text editor
- Select the App.js
- Remove the boilerplate information
- Paste a basic App class component
- Refactor for your project

## Adding more components
- Make a folder titled `components` in the src folder
- Add files with the following naming convention `ClassComponentName.js` within the components folder
- Ensure App.js has imports for other components
```javascript
import React, { Component } from 'react'

// import the other components with its file path
import ClassComponentName from './components/ClassComponentName'
```
- Ensure component calls are included on the App.js
```javascript
  render() {
    return (
      <>
        <ClassComponentName />
      </>
    )
  }
```

## Basic Structure of Logic Component Class
```javascript
import React, { Component } from 'react'

class App extends Component {

  // Class variables are stored in the constructor. 
  constructor(props) {

    // The super(props) will initiate the parent's constructor method and allows the component to inherit properties from its parent.
    super(props)

    // State is an object that holds as many key value pairs as needed.
    this.state = {
    }
  }

// The functions we write that produce behavior specific to our app live between the constructor and the render. Think of your class components as having three parts. Constructor at the top, custom logic function in the middle, render at the bottom.
  functionName = () => {

    // React has a special method called `setState()` whose job is to set and update the values in the state object.
    this.setState()
  }

  render() {
    return (
      <>
        <h1>Alpha Web Developer Resources Tracker</h1>
        <p>Resources: 0</p>
        <button>Add a resource</button>
      </>
    )
  }
}

export default App
```

## Styling
```javascript
// import other files with its file path on the App.js file
import './App.css'

// Styling with the App.css
  
  // Option 1: Add id attribute to the open tag of the element you want to change. Suggest using a div tag because it makes styling easier.
  <div id="square">
    <p>Resources: {this.state.resources}</p>
    <button onClick={this.addResource}>
      Add a resource
    </button>
  </div>
  // then make changes to the id attribute in App.css
  #square {
    border: 2px solid blue;
    width: 150px;
    height: 100px;
  }  

  // Option 2: Add class attribute to the open tag of the element you want to change. Suggest using a div tag because it makes styling easier. Note: Since you are in a class component, you will have to use className for this attribute
  <div className="square">
    <p>Resources: {this.state.resources}</p>
    <button onClick={this.addResource}>
      Add a resource
    </button>
  </div>
  // then make changes to the class attribute in App.css
    .square {
    border: 2px solid blue;
    width: 150px;
    height: 100px;
  }  

// Inline styling
  
  // Option 3: Go to the opening tag of the element you want to change
    <button onClick={this.addResource} style={ {color: "green"} }>
      Add a resource
    </button>

  // Option 4: Update the state object
    // constructor section
      this.state = {
        resources: 0,
        color: "green"
      }
    // render section
    <button onClick={this.addResource} style={ {color: this.state.color} }>
      Add a resource
    </button>
```

## Merging to Remote Repository

Leave the project folder and go to the main repository (react-challenges)
- $ `cd ..`

Push your changes
- $ `git status`
- $ `git add .`
- $ `git commit -m "meaningful message here"`
- $ `git push origin <branch-name>`

Make a pull request
- Inside of the repository on GitHub, Click `Compare & pull request`
- You will then be redirected to a page where you can create a pull request. Click `Create pull request`
