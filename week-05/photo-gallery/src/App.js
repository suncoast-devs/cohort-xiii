import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryList from './pages/CategoryList'
import PhotoList from './pages/PhotoList'
import PhotoDetail from './pages/PhotoDetail'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:hobby" component={PhotoList} />
            <Route exact path="/:hobby/:index" component={PhotoDetail} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
