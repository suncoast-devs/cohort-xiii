import React, { Component } from 'react'

class Villain extends Component {
  render() {
    return (
      <section>
        <header>
          <img src={this.props.image} />
          <h2>{this.props.villainName}</h2>
        </header>
        <p>{this.props.description}</p>
      </section>
    )
  }
}

export default Villain
