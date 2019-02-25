import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <p>
        {this.props.label}{' '}
        <input
          type="range"
          // onChange={this.sValue}
          min="0"
          max={this.props.maxValue}
          // value={this.state.s}
        />
      </p>
    )
  }
}

export default Slider
