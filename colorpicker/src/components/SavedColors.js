import React, { Component } from 'react'
import ColorBox from './ColorBox'

class SavedColors extends Component {
  render() {
    return (
      <section className="colorArea">
        <ul className="colorHistory">
          {this.props.savedColors.map(color => {
            return (
              <li>
                <ColorBox
                  s={color.saturation}
                  h={color.hue}
                  l={color.lightness}
                />
                Hue:{color.hue}, Saturation: {color.saturation}%, Lightness:
                {color.lightness}%
              </li>
            )
          })}
        </ul>
        <button onClick={this.props.saveYourColor}>what's this color?</button>
      </section>
    )
  }
}

export default SavedColors
