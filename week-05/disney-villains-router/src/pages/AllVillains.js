import React, { Component } from 'react'
import Header from '../components/Header'
import Villains from '../components/Villains'
import Footer from '../components/Footer'

class AllVillains extends Component {
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

export default AllVillains
