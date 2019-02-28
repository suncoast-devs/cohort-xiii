import React, { Component } from 'react'
import axios from 'axios'

import Villain from '../components/Villain'

class VillainPage extends Component {
  state = {
    villain: {}
  }
  componentDidMount() {
    axios
      .get('http://localhost:8080/villains/' + this.props.match.params.id)
      .then(resp => {
        console.log({ resp })
        this.setState({
          villain: resp.data
        })
      })
  }
  render() {
    console.log(this.props)
    return (
      <Villain
        key={this.state.villain.id}
        id={this.state.villain.id}
        villainName={this.state.villain.name}
        description={this.state.villain.bio}
        image={this.state.villain.icon}
      />
    )
  }
}

export default VillainPage
