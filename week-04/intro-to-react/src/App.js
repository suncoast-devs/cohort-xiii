import React, { Component } from 'react'

import WelcomeMessage from './components/WelcomeMessage'

const heros = [
  'Superman',
  'Batman',
  'Wonder Woman',
  'Black Panther',
  'Doctor Strange',
  'Cat Woman',
  'Flash',
  'Shazam',
  'Capt Marvel',
  'Batman'
]

class App extends Component {
  render() {
    return (
      <section>
        Hello, Welcome to react
        {heros.map(hero => {
          return <WelcomeMessage username={hero} />
        })}
      </section>
    )
  }
}

export default App
