import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    team1Score: 0,
    team2Score: 0,
    team1Name: 'Team 1',
    team2Name: 'Team 2',
    team1UserInput: ''
  }

  add1ToTeam1Score = () => {
    this.setState({
      team1Score: this.state.team1Score + 1
    })
  }

  resetTeam1Score = () => {
    const nextState = {
      team1Score: 0
    }

    this.setState(nextState)
  }

  updateTeam1Name = () => {
    this.setState({
      team1Name: this.state.team1UserInput,
      team1UserInput: ''
    })
  }

  storeTeam1NewName = event => {
    console.log(event)
    this.setState({
      team1UserInput: event.target.value
    })
  }

  render() {
    return (
      <>
        <h1>My Score Board</h1>
        <section class="score-area">
          <section class="team1">
            <h2>{this.state.team1Name}</h2>
            <p>{this.state.team1Score}</p>
          </section>
          <section class="team2">
            <h2>{this.state.team2Name}</h2>
            <p>{this.state.team2Score}</p>
          </section>
        </section>
        <section class="update-score">
          <section class="team1">
            <section class="team-name">
              update team 1 name
              <input
                type="text"
                onChange={this.storeTeam1NewName}
                value={this.state.team1UserInput}
              />
              <button onClick={this.updateTeam1Name}>Update</button>
            </section>
            <section>
              update team 1 score
              <button onClick={this.add1ToTeam1Score}>add 1</button>
              <button>subtract 1</button>
              <button onClick={this.resetTeam1Score}>reset team 1 score</button>
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
