import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryList from './pages/CategoryList'
import PhotoList from './pages/PhotoList'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:hobby" component={PhotoList} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
