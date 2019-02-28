import React, { Component } from 'react'
import Header from './components/Header'
import Villains from './components/Villains'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Villains />
        <Footer />
      </>
    )
  }
}

export default App
