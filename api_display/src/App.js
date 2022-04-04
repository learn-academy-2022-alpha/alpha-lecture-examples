import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos: null
      } 
  }
  fetchRover = () => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(response => response.json())
      // .then(payload => console.log(payload))
      .then(payload => this.setState({photos: payload}))
      .catch(error => console.log(error))
  }
  render() {
    console.log(this.state.photos)

    return (
      <>
        <h1 id="color-white">Hello World</h1> 
        <button onClick={this.fetchRover }>CLICK ME!</button>
        <div>
          {this.state.photos? 
          this.state.photos.photos.map(rover_data_set => {
            return <img src={rover_data_set.img_src} alt="" />

          }) : null}
        </div>
      </>
    )
  }
}



export default App;
