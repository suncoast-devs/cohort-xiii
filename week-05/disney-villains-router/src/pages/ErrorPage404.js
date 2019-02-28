import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class ErrorPage404 extends Component {
  render() {
    return (
      <div>
        You lost?.... <Link to="/">go home?</Link>
      </div>
    )
  }
}

export default ErrorPage404
