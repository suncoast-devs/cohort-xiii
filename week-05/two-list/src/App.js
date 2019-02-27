import React, { Component } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ToDoList />
      </>
    )
  }
}

export default App
