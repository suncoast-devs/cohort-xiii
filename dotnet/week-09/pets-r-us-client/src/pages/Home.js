import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Pets from '../components/Pets'

class Home extends Component {
  render() {
    return (
      <>
        <TopBar />
        <NavBar />
        <Pets />
      </>
    )
  }
}

export default Home
