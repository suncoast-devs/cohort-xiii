import React, { Component } from 'react'
import Villain from './Villain'

// import data from '../data/villains.json'

class Villains extends Component {
  state = {
    villains: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/villains')
      .then(resp => resp.json())
      .then(data => {
        console.log('from server')
        console.log(data)
        this.setState({
          villains: data
        })
      })
  }

  render() {
    return (
      <main>
        {this.state.villains.map(villain => {
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
