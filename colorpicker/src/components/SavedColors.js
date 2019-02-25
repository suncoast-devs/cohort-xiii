import React, { Component } from 'react'
import ColorBox from './ColorBox'

class SavedColors extends Component {
  render() {
    return (
      <section className="colorArea">
        <ul className="colorHistory">
          {this.props.savedColors.map((color, i) => {
            return (
              <li key={i}>
                <ColorBox
                  s={color.saturation}
                  h={color.hue}
                  l={color.lightness}
                  a={color.alpha}
                />
                Hue:{color.hue}, Saturation: {color.saturation}%, Lightness:
                {color.lightness}%, Alpha: {color.alpha}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default SavedColors
