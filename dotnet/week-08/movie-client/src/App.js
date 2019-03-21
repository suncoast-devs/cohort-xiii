import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import axios from 'axios'
class App extends Component {
  state = {
    movies: []
  }
  componentDidMount() {
    axios.get('https://localhost:5001/api/movies').then(resp => {
      this.setState({
        movies: resp.data
      })
    })
  }
  render() {
    return (
      <>
        <h1>Movie!!!!</h1>
        <ul>
          {this.state.movies.map(movie => {
            return <li key={movie.id}>{movie.title}</li>
          })}
        </ul>
      </>
    )
  }
}

export default App
