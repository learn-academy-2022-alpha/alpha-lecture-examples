// destructing Component from the React library
import React, { Component } from 'react'

// creating a class that extends the Component 
class App extends Component {
  // React lifecyle method that automatically runs
  render() {
    // every render needs a return
    return (
      // React fragments wrapped around the markup
      <>
        <h1>Alpha Web Developer Resources Tracker</h1>
        <p>Resources: 0</p>
        <button>Add a resource</button>
      </>
    )
  }
}
// every component must be exported
export default App

