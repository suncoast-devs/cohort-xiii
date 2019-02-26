import React, { Component } from 'react'

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
  render() {
    return (
      <main className="game-container">
        {FACES.map((face, i) => {
          return (
            <div className="card" key={i}>
              {face}
            </div>
          )
        })}
      </main>
    )
  }
}

export default MemoryGame
