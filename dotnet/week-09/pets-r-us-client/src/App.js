import React, { Component } from 'react'
import Home from './pages/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddAPet from './pages/AddAPet'
import AddShelterPage from './pages/AddShelter'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddAPet} />
          <Route exact path="/shelter/add" component={AddShelterPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
