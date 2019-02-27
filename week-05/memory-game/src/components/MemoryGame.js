import React, { Component } from 'react'
import Card from './Card'

const FACES = [
  '🤖',
  '🐢',
  '🐼',
  '🐙',
  '👾',
  '👹',
  '🐢',
  '👾',
  '😱',
  '🤖',
  '🐲',
  '🐙',
  '😱',
  '👹',
  '🐼',
  '🐲'
]

class MemoryGame extends Component {
  state = {
    revealedCards: [],
    currentPair: []
  }
  addCardToSelected = index => {
    // if this.state.currentPair.length < 2
    // add currently selected to CMM
    // in addition to selected cards
    const pair = this.state.currentPair.concat(index)
    if (pair.length < 2) {
      // check to see if current pair is a match
      this.setState({
        revealedCards: this.state.revealedCards.concat(index),
        currentPair: [index] // resets current pair to just the selected once we have selected a third card
      })
    } else {
      if (FACES[pair[0]] === FACES[pair[1]]) {
        this.setState({
          currentPair: [pair],
          revealedCards: this.state.revealedCards.concat(pair)
        })
      } else {
        this.setState({
          currentPair: [],
          revealedCards: this.state.revealedCards.concat(index).filter(i => {
            console.log({ i, pair })
            return i !== pair[0] && i !== pair[1]
          })
        })
      }
    }
  }
  render() {
    return (
      <main className="game-container">
        {FACES.map((face, index) => {
          return (
            <Card
              key={index}
              face={face}
              index={index}
              addCardToSelected={this.addCardToSelected}
              selected={this.state.revealedCards.includes(index)}
            />
          )
        })}
      </main>
    )
  }
}

export default MemoryGame
