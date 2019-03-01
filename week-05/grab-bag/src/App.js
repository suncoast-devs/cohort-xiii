import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    newValue: '',
    list: [],
    selectedValue: ''
  }

  componentDidMount() {
    const listFromStorage = localStorage.getItem('grab-bag-list-xiii')
    if (listFromStorage) {
      this.setState({
        list: listFromStorage.split(',')
      })
    }
  }

  saveListToLocalStorage = () => {
    localStorage.setItem('grab-bag-list-xiii', this.state.list)
  }

  updateValue = event => {
    this.setState({
      newValue: event.target.value
    })
  }

  addValueToList = event => {
    // this prevents the form from using it's default behavior, which is to send data to a server
    event.preventDefault()
    this.setState(
      {
        list: this.state.list.concat(this.state.newValue),
        newValue: ''
      },
      () => {
        this.saveListToLocalStorage()
      }
    )
  }

  selectRandomValue = () => {
    const randomIndex = Math.floor(Math.random() * this.state.list.length)
    this.setState({
      selectedIndex: randomIndex
    })
  }

  removeValue = indexToRemove => {
    this.setState(
      {
        list: this.state.list.filter((val, i) => i !== indexToRemove)
      },
      () => {
        this.saveListToLocalStorage()
      }
    )
  }

  render() {
    return (
      <>
        <h1>Grab Bag</h1>
        <section>
          <form onSubmit={this.addValueToList}>
            <input
              type="text"
              placeholder="Enter the new value here"
              onChange={this.updateValue}
              value={this.state.newValue}
            />
            <button>+</button>
          </form>
          <ul>
            {this.state.list.map((value, i) => {
              return (
                <li
                  key={i}
                  onClick={() => this.removeValue(i)}
                  className={
                    i === this.state.selectedIndex ? 'highlighted-item' : ''
                  }
                >
                  {value}
                </li>
              )
            })}
          </ul>
        </section>
        <section>
          <button onClick={this.selectRandomValue}>Pick random</button>
          {/* <p>{this.state.selectedValue}</p> */}
        </section>
      </>
    )
  }
}

export default App
