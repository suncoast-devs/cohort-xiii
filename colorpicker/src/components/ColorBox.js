import React, { Component } from 'react'

class ColorBox extends Component {
  render() {
    return (
      <div
        className="colorEx"
        style={{
          backgroundColor: `hsl(${this.props.h},${this.props.s}%,${
            this.props.l
          }%)`
        }}
      />
    )
  }
}

export default ColorBox
