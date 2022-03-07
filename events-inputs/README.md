# Inputs
    -Self closing tag
    - Has type attribute that is defaulted to text
    - Has an onChange attribute 
```javascript
<input />
```
# OnChange
  - onChange is an attribute that lives on the input tag. Its job is to listen for changes in the input field and capture those changes. 
  - Out of the box, onChange provides certain properties.  It is listening for any dom event and will give that to us when we call a method.  Event is a property of the onChange listener
  - This action is a behavior so onChange is going to correspond to a method.

# Events
  - An event is a property passed from an onChange
  - Is an object
  - The browser is always listening for events. An event occurs anytime a user or the browser manipulates a webpage. Examples of events are when a page loads, when the user clicks a button, any key strokes, and resizing a window. All these events can be captured by developers through event handlers, or methods that track events. If you have ever used an onclick/onClick method you have made an event handler.

```javascript
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    // console.log(e) // <- Shows the event object
    // console.log(e.target) <- Shows the target of input
    // console.log(e.target.value) <- Shows the value inside the input
    this.setState({name: e.target.value})
  }

  render() {
    console.log(this.state.name)
    return (
      <>
        <h1>Greeter App</h1>
        <input 
          type="text"
          onChange={this.handleChange}
        />
      </>
    )
  }
}

export default App
```


# Passing the Input as Props
    -Now that we have the value in state we can pass the data to another component.
    - I want to use this component to see the input value shown on the page so it will be my display or dumb component

``` javascript
// src/App.js
import React, { Component } from 'react'
import Yelling from './components/Yelling'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return(
      <>
        <h1>Greeter App</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <Yelling name={this.state.name}/>
      </>
    )
  }
}
export default App

// src/components/Yelling.js

import React, { Component } from 'react'

class Yelling extends Component {
  render() {
    return(
      <>
        <h3>HELLO, I SEE YOUR NAME IS:</h3>
        <p>{this.props.name}</p>
      </>
    )
  }
}
export default Yelling
```


# Manipulating the Prop Values
    Inside the Yelling component we can use JavaScript logic to manipulate the output. We don't need state, just a good ol' fashion class method.

```javascript
import React, { Component } from 'react'

class Yelling extends Component {
  yelling = (userInput) => {
    return userInput.toUpperCase()
  }

  render() {
    return(
      <>
        <h3>HELLO, I SEE YOUR NAME IS:</h3>
        <p>{this.yelling(this.props.name)}</p>
      </>
    )
  }
}
export default Yelling
```