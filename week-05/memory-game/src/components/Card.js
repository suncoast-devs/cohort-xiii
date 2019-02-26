import React, { Component } from 'react'

class Card extends Component {
  render() {
    if (this.props.selected) {
      return <div className="card">{this.props.face}</div>
    } else {
      return (
        <div
          className="card"
          onClick={() => this.props.addCardToSelected(this.props.index)}
        >
          [x]
        </div>
      )
    }
  }
}

export default Card
