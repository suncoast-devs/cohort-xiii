import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    numbers: []
  }

  addNumberToList = () => {
    const random = Math.ceil(Math.random() * 6)
    this.setState({
      numbers: this.state.numbers.concat(random)
    })
  }

  render() {
    return (
      <>
        <button onClick={this.addNumberToList}>Click me!</button>
        <ul>
          {this.state.numbers.map(number => {
            return <li>{number}</li>
          })}
        </ul>
      </>
    )
  }
}

export default App
