import React, { Component } from 'react'

class PreviousCards extends Component {
  render() {
    console.log(this.props.previousCards)
    return(
      <>
        <h3>Previous Card</h3>
        {this.props.previousCards.map((card, index,) => {
          return <p key={index}>{card}</p>
        })}
      </>
    )
  }
}

export default PreviousCards