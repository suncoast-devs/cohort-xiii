import React, { Component } from 'react'
import Villain from './Villain'

import data from '../data/villains.json'

class Villains extends Component {
  render() {
    console.log(data)
    return (
      <main>
        {' '}
        {data.map(villain => {
          return (
            <Villain
              key={villain.id}
              villainName={villain.name}
              description={villain.bio}
              image={villain.picture}
            />
          )
        })}
      </main>
    )
  }
}

export default Villains
