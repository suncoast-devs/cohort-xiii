import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import MemoryGame from './components/MemoryGame'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MemoryGame />
      </>
    )
  }
}

export default App
