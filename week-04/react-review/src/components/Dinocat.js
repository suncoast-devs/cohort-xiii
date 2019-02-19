import React, { Component } from 'react'

import DinocatImage from '../images/dinocat.png'

class Dinocat extends Component {
  render() {
    return (
      <div>
        <figure>
          <img src={DinocatImage} alt="Dino cats! Rar!" />
        </figure>
        <figcaption>
          <p>
            the Dinotocat
            <img src="https://github.com/kimestoesta.png" />
          </p>
        </figcaption>
      </div>
    )
  }
}

export default Dinocat
