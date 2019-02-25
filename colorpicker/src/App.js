import React, { Component } from 'react'
import Slider from './components/Slider'

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
            <Slider
              label="H"
              maxValue="240"
              onSlide={this.hValue}
              sliderValue={this.state.h}
            />
            <Slider
              label="S"
              maxValue="100"
              onSlide={this.sValue}
              sliderValue={this.state.s}
            />
            <Slider
              label="L"
              maxValue="100"
              onSlide={this.lValue}
              sliderValue={this.state.l}
            />
          </section>
        </main>
      </section>
    )
  }
}

export default App
