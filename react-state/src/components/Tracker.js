import React, { Component } from 'react'

class Tracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: 0,
      color: "purple"
    }
  }

  addResource = () => {
    this.setState({resources: this.state.resources + 1})
  }

  render() {
    return (
      <>
        <div id="square">
        <p>Resources: {this.state.resources}</p>
          <button onClick={this.addResource} style={ {color: this.state.color} } >Add a resource</button>
        </div>
      </>
    )
  }
}

export default Tracker