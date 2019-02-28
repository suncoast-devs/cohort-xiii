import React, { Component } from 'react'
import axios from 'axios'

import Villain from './Villain'

class Villains extends Component {
  state = {
    villains: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/villains').then(resp => {
      console.log({ resp })
      this.setState({
        villains: resp.data
      })
    })

    // fetch('http://localhost:8080/villains')
    //   .then(resp => resp.json())
    //   .then(data => {
    //     console.log('from server')
    //     console.log(data)
    //     this.setState({
    //       villains: data
    //     })
    //   })
  }

  render() {
    return (
      <main>
        {this.state.villains.map(villain => {
          return (
            <Villain
              key={villain.id}
              id={villain.id}
              villainName={villain.name}
              description={villain.bio}
              image={villain.icon}
            />
          )
        })}
      </main>
    )
  }
}

export default Villains
