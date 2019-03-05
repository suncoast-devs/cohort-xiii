import React, { useState } from 'react'

export default function Scoreboard(props) {
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)

  // this is the h1 tag to be displayed
  const [team1DisplayName, setTeam1DisplayName] = useState('Team 1')

  // this is the for the input box
  const [team1InputName, setTeam1InputName] = useState('Team 1')

  // this is the h1 tag to be displayed
  const [team2DisplayName, setTeam2DisplayName] = useState('Team 2')

  // this is the for the input box
  const [team2InputName, setTeam2InputName] = useState('Team 2')

  const subtract1FromTeam1 = () => {
    if (team1Score > 0) {
      setTeam1Score(prevScore => prevScore - 1)
    }
  }

  return (
    <>
      <h1>Welcome to {props.title}</h1>
      <section className="score-area">
        <section className="team1">
          <h2>{team1DisplayName}</h2>
          <p>{team1Score}</p>
        </section>
        <section className="team2">
          <h2>{team2DisplayName}</h2>
          <p>{team2Score}</p>
        </section>
      </section>
      <section className="update-score">
        <section className="team1">
          <section className="team-name">
            update team 1 name
            <input
              type="text"
              value={team1InputName}
              onChange={event => setTeam1InputName(event.target.value)}
            />
            <button onClick={() => setTeam1DisplayName(team1InputName)}>
              Update
            </button>
          </section>
          <section>
            update team 1 score
            <button onClick={() => setTeam1Score(prevScore => prevScore + 1)}>
              add 1
            </button>
            <button onClick={subtract1FromTeam1}>subtract 1</button>
          </section>
        </section>
        <section className="team2">
          <section className="team-name">
            update team 2 name
            <input
              type="text"
              value={team2InputName}
              onChange={event => setTeam2InputName(event.target.value)}
            />
            <button onClick={() => setTeam2DisplayName(team2InputName)}>
              Update
            </button>
          </section>
          <section>
            update team 2 score
            <button onClick={() => setTeam2Score(prevScore => prevScore + 1)}>
              add 1
            </button>
            <button onClick={() => setTeam2Score(prevScore => prevScore - 1)}>
              subtract 1
            </button>
          </section>
        </section>
      </section>
    </>
  )
}
