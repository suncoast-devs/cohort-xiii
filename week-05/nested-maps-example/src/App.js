import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import axios from 'axios'
class App extends Component {
  state = {
    game: [
      ['💣', '🚩', ' ', '💣', '🚩', ' ', '💣', '🚩', ' '],
      [' ', '💣', 6, ' ', '💣', 6, ' ', '💣', 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
      ['💣', '🚩', ' ', '💣', '🚩', ' ', '💣', '🚩', ' '],
      [' ', '💣', 6, ' ', '💣', 6, ' ', '💣', 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
      ['💣', '🚩', ' ', '💣', '🚩', ' ', '💣', '🚩', ' '],
      [' ', '💣', 6, ' ', '💣', 6, ' ', '💣', 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
      ['💣', '🚩', ' ', '💣', '🚩', ' ', '💣', '🚩', ' '],
      [' ', '💣', 6, ' ', '💣', 6, ' ', '💣', 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9]
    ]
  }

  componentDidMount() {
    // axios goes here.....
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: 0
      })
      .then(resp => {
        console.log({ resp })
        this.setState({
          game: resp.data.board
        })
      })
  }
  render() {
    return (
      <>
        <table>
          <tbody>
            {this.state.game.map(row => {
              return (
                <tr>
                  {row.map(col => {
                    return (
                      <td>
                        <button>{col} </button>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default App
