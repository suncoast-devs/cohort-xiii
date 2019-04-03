import React, { Component } from 'react'

import ReactMapGL from 'react-map-gl'

class MyMap extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 27.77,
      longitude: -82.3,
      zoom: 8
    }
  }
  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </div>
    )
  }
}

export default MyMap
