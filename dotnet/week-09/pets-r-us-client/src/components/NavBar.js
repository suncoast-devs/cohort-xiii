import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Adopt a pet</Link>
        <Link to="/add">Add a pet</Link>
        <Link to="/shelter/add">Register a Shelter</Link>
      </nav>
    )
  }
}

export default NavBar
