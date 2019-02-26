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
    selectedCards: []
  }
  addCardToSelected = index => {
    this.setState({
      selectedCards: this.state.selectedCards.concat(index)
    })
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
