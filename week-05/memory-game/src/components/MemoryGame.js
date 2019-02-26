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
    selectedCards: [],
    currentPair: []
  }
  addCardToSelected = index => {
    // if this.state.currentPair.length < 2
    // add currently selected to CMM
    // in addition to selected cards
    if (this.state.currentPair.length < 2) {
      // check to see if current pair is a match
      this.setState({
        selectedCards: this.state.selectedCards.concat(index),
        currentPair: [index] // resets current pair to jsut the selectd once we have selected a third card
      })
    } else {
      const pair = this.state.currentPair.concat(index)
      if (FACES[pair[0]] === FACES[pair[1]]) {
        console.log('matched!')
        this.setState({
          currentPair: pair,
          selectedCards: this.state.selectedCards.concat(pair)
        })
      } else {
        console.log('not matched')
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
              selected={this.state.selectedCards.includes(index)}
            />
          )
        })}
      </main>
    )
  }
}

export default MemoryGame
