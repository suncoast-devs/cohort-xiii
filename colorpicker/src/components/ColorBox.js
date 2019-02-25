import React, { Component } from 'react'

class ColorBox extends Component {
  render() {
    return (
      <div className="color-box-parent">
        <div
          className="colorEx"
          style={{
            backgroundColor: `hsla(${this.props.h},${this.props.s}%,${
              this.props.l
            }%, ${this.props.a}% )`
          }}
        />
      </div>
    )
  }
}

export default ColorBox
