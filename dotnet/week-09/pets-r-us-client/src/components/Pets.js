import React, { Component } from 'react'
import Pet from './Pet'

class Pets extends Component {
  render() {
    return (
      <ul className="all-pets">
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
      </ul>
    )
  }
}

export default Pets
