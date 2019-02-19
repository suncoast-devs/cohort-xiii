import React, { Component } from 'react'
import Dinocat from './components/Dinocat'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <>
        <Dinocat />
        <JusticeCat />
        <SuperHeroCat />
      </>
    )
  }
}

export default App
