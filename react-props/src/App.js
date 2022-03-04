import React, { Component } from 'react'
import Card from './components/Card'
import PreviousCards from './components/PreviousCards'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardDeck: ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"],
      currentCard: "",
      previousCards: []
    }
  }
drawCard = () => {
  let randomCard = Math.floor(Math.random() * this.state.cardDeck.length)
  this.setState({
    currentCard: this.state.cardDeck[randomCard],
    previousCards: [...this.state.previousCards, this.state.cardDeck[randomCard]]
  })
}
  render() {
    console.log(this.state.currentCard)
    return(
      <>
        <h1>Card Draw</h1>
        <button onClick={this.drawCard}>Draw a Card</button>
        <Card card={this.state.currentCard}/>
        <PreviousCards previousCards={this.state.previousCards} />
      </>
    )
  }
}

export default App;
