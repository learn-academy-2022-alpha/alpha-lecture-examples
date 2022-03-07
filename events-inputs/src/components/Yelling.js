import React, { Component } from 'react'

class Yelling extends Component {

  yelling = (userInput) => {
    return userInput.toUpperCase()
  }

  render() {
    return (
      <>
      <h3>HELLO, I SEE YOUR NAME IS: </h3>
      <p>{this.yelling(this.props.name)}</p>
      </>
    )
  }
}

export default Yelling