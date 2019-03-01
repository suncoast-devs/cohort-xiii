import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryList from './pages/CategoryList'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryList} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
