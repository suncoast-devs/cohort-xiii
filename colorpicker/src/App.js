import React, { Component } from 'react'

class App extends Component {
  state = {
    h: 120,
    s: 50,
    l: 50,
    divStyle: '',
    yourColor: []
  }

  hValue = event => {
    this.setState({
      h: event.target.value
    })
    console.log(this.state.h)
  }
  sValue = event => {
    this.setState({
      s: event.target.value
    })
    console.log(this.state.s)
  }
  lValue = event => {
    this.setState({
      l: event.target.value
    })
    console.log(this.state.l)
  }
  saveYourColor = () => {
    this.setState({
      yourColor: this.state.yourColor.concat(
        `Hue:${this.state.h} + Saturation: ${this.state.s}% + Lightness: ${
          this.state.l
        }%`
      )
    })
  }
  render() {
    return (
      <section className="allmycontents">
        <h1 className="title"> Pick My Color💕</h1>
        <main className="contents">
          <div
            className="colorEx"
            style={{
              backgroundColor: `hsl(${this.state.h},${this.state.s}%,${
                this.state.l
              }%)`
            }}
          />
          <section className="colorArea">
            <ul className="colorHistory">
              {this.state.yourColor.map(color => {
                return <li>{color}</li>
              })}
            </ul>
            <button onClick={this.saveYourColor}>what's this color?</button>
          </section>
          <section className="hslrange">
            <p>
              H{' '}
              <input
                type="range"
                onChange={this.hValue}
                min="0"
                max="240"
                value={this.state.h}
              />
            </p>
            <p>
              S{' '}
              <input
                type="range"
                onChange={this.sValue}
                min="0"
                max="100"
                value={this.state.s}
              />
            </p>
            <p>
              L{' '}
              <input
                type="range"
                onChange={this.lValue}
                min="0"
                max="100"
                value={this.state.l}
              />
            </p>
          </section>
        </main>
      </section>
    )
  }
}

export default App
