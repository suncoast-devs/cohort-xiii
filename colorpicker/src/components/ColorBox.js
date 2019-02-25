import React, { Component } from 'react'

class ColorBox extends Component {
  render() {
    return (
      <div
        className="colorEx"
        style={{
          backgroundColor: `hsla(${this.props.h},${this.props.s}%,${
            this.props.l
          }%, ${this.props.a}% )`
        }}
      />
    )
  }
}

export default ColorBox
