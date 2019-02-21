import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <>
        <h1>My Score Board</h1>
        <section class="score-area">
          <section class="team1">
            <h2>Team 1</h2>
            <p>10</p>
          </section>
          <section class="team2">
            <h2>Team 2</h2>
            <p>10</p>
          </section>
        </section>
        <section class="update-score">
          <section class="team1">
            <section class="team-name">
              update team 1 name
              <input type="number" />
              <button>Update</button>
            </section>
            <section>
              update team 1 score
              <button>add 1</button>
              <button>subtract 1</button>
            </section>
          </section>
          <section class="team2">
            <section class="team-name">
              update team 2 name
              <input type="number" />
              <button>Update</button>
            </section>
            <section>
              update team 2 score
              <button>add 1</button>
              <button>subtract 1</button>
            </section>
          </section>
        </section>
      </>
    )
  }
}

export default App
