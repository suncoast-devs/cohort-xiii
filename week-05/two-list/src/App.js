import React, { Component } from 'react'
import axios from 'axios'

const API_URL = `https://one-list-api.herokuapp.com/items?access_token=cohort-xiii`

class App extends Component {
  state = {
    newItemText: '',
    todoList: []
  }

  updateStateWithNewItem = event => {
    this.setState({
      newItemText: event.target.value
    })
  }

  componentDidMount() {
    this.getListFromAPI()
  }

  getListFromAPI = () => {
    // go to the API
    axios.get(API_URL).then(resp => {
      // populate state with the todo list
      this.setState({
        todoList: resp.data
      })
    })
  }

  deleteItem = item => {
    const url = `https://one-list-api.herokuapp.com/items/${
      item.id
    }?access_token=cohort-xiii`
    axios.delete(url).then(resp => {
      this.getListFromAPI()
    })
  }

  addItemToApi = event => {
    event.preventDefault()
    axios
      .post(API_URL, {
        item: {
          text: this.state.newItemText
        }
      })
      .then(resp => {
        // get lateset list form API
        this.getListFromAPI()
        // update state to clear out the input field
        this.setState({
          newItemText: ''
        })
      })
  }

  resetList = () => {
    // delete all the task from the API

    // reset the state
    // reset toDoList
    // reset the newItemText
    this.setState({
      todoList: [],
      newItemText: ''
    })
  }

  render() {
    return (
      <>
        <h1 className="header">Two List (React)</h1>
        <button onClick={this.resetList}>RESET LIST</button>
        <form className="add-form" onSubmit={this.addItemToApi}>
          <input
            type="text"
            id="newItem"
            placeholder="Add TODO"
            value={this.state.newItemText}
            onChange={this.updateStateWithNewItem}
          />
          <button>
            <i className="fas fa-plus" />
            ADD
          </button>
        </form>
        <p className="output" />
        <ol className="todo-list">
          {this.state.todoList.map(item => {
            return <li onClick={() => this.deleteItem(item)}>{item.text}</li>
          })}
        </ol>
      </>
    )
  }
}

export default App
