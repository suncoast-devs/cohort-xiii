import React, { Component } from 'react'
import MyMap from './Map'

export class Home extends Component {
  static displayName = Home.name

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>

        <MyMap />
      </div>
    )
  }
}
