import React, { Component } from 'react'

class Card extends Component {
  render() {
    return(
      <>
        <h3>Card Component</h3>
        <p>{this.props.card}</p>
      </>
    )
  }
}

export default Card 