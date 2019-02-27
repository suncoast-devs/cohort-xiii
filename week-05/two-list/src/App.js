import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    newItemText: '',
    todoList: [],
    accessToken: 'cohort-xiii'
  }

  getApiUrl = () => {
    return `https://one-list-api.herokuapp.com/items?access_token=${
      this.state.accessToken
    }`
  }

  updateStateWithNewItem = event => {
    this.setState({
      newItemText: event.target.value
    })
  }

  componentDidMount() {
    this.getListFromAPI()
    // check local storage for a token
    const token = localStorage.getItem('list-access-token')
    if (token) {
      this.setState(
        {
          accessToken: token
        },
        () => {
          this.getListFromAPI()
        }
      )
    }
  }

  getListFromAPI = () => {
    // go to the API
    axios.get(this.getApiUrl()).then(resp => {
      // populate state with the todo list
      this.setState({
        todoList: resp.data
      })
    })
  }

  deleteItem = item => {
    const url = `https://one-list-api.herokuapp.com/items/${
      item.id
    }?access_token=${this.state.accessToken}`
    axios.delete(url).then(resp => {
      this.getListFromAPI()
    })
  }

  addItemToApi = event => {
    event.preventDefault()
    axios
      .post(this.getApiUrl(), {
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

  generateRandomToken = () => {
    // creat a new string that is 20 random characters long
    return Math.floor(Math.random() * Math.pow(10, 20)).toString()
  }

  resetList = () => {
    // reset the state
    // reset toDoList
    // reset the newItemText
    // create new token
    this.setState(
      {
        todoList: [],
        newItemText: '',
        accessToken: this.generateRandomToken()
      },
      () => {
        console.log(this.state.accessToken)
        this.getListFromAPI()
        // store the new token in localstorage
        localStorage.setItem('list-access-token', this.state.accessToken)
      }
    )
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
            return (
              <li
                onClick={() => this.deleteItem(item)}
                className={item.completed ? 'completed-item' : ''}
              >
                {item.text}
              </li>
            )
          })}
        </ol>
      </>
    )
  }
}

export default App
