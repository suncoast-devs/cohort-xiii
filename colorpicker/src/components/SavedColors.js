import React, { Component } from 'react'

class SavedColors extends Component {
  render() {
    return (
      <section className="colorArea">
        <ul className="colorHistory">
          {this.props.savedColors.map(color => {
            return <li>{color}</li>
          })}
        </ul>
        <button onClick={this.props.saveYourColor}>what's this color?</button>
      </section>
    )
  }
}

export default SavedColors
