import React, { Component } from 'react'
import Header from './components/Header'
import Villains from './components/Villains'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SplashPage from './pages/SplashPage'
import AllVillains from './pages/AllVillains'
import VillainPage from './pages/VillainPage'
import ErrorPage404 from './pages/ErrorPage404'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route exact path="/page1" component={Page1} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/villains" component={AllVillains} />
            <Route exact path="/villains/:id" component={VillainPage} />
            <Route component={ErrorPage404} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
