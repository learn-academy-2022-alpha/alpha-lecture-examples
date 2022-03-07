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
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
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

        <br />
        <Yelling name={this.state.name}/>
      </>
    )
  }
}

export default App