import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Scoreboard from './components/Scoreboard'

class App extends Component {
  render() {
    return <Scoreboard title="the Main Event" />
  }
}

export default App
