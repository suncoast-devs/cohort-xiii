import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SplashPage extends Component {
  render() {
    return (
      <>
        <h1>Welcome to D-Villains!</h1>
        <Link to="/villains">Enter!</Link>
      </>
    )
  }
}

export default SplashPage
