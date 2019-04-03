import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
class MyMap extends Component {
  state = {
    viewport: {
      width: 1000,
      height: 1000,
      latitude: 28.1,
      longitude: -82.6,
      zoom: 8
    },
    userLocation: {
      lat: 0,
      lng: 0
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      console.log({ latitude, longitude })
      const oldViewport = { ...this.state.viewport }
      oldViewport.latitude = latitude
      oldViewport.longitude = longitude
      oldViewport.zoom = 15
      this.setState({
        userLocation: { lat: latitude, lng: longitude },
        viewport: oldViewport
      })
    })
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={
          'pk.eyJ1IjoiZGV3c2VwaCIsImEiOiJjanRrNzQwYTYwMHdjM3lwNnh2am05ejc0In0._LCOTuYCw-eRKDvUut2TxQ'
        }
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          longitude={this.state.userLocation.lng}
          latitude={this.state.userLocation.lat}
        >
          🚩
        </Marker>
      </ReactMapGL>
    )
  }
}

export default MyMap
