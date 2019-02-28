import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Villain extends Component {
  render() {
    return (
      <section>
        <header>
          <img src={this.props.image} />
          <Link to={'/villains/' + this.props.id}>
            <h2>{this.props.villainName}</h2>
          </Link>
        </header>
        <p>{this.props.description}</p>
      </section>
    )
  }
}

export default Villain
