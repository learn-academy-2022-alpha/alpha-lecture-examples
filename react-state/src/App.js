import React, { Component } from 'react'
import Tracker from './components/Tracker.js'
import './App.css'
class App extends Component {


  render() {
    return (
      <>
        <h1>Alpha Web Developer Resources Tracker</h1>
        <h2>January</h2>
        <Tracker />
        <h2>February</h2>
        <Tracker />
        <h2>March</h2>
        <Tracker />
      </>
    )
  }
}

export default App