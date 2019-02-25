import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <p>
        {this.props.label}{' '}
        <input
          type="range"
          onChange={this.props.onSlide}
          min={this.props.minValue ? this.props.minValue : '0'}
          max={this.props.maxValue}
          value={this.props.sliderValue}
        />
      </p>
    )
  }
}

export default Slider
