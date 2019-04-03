import React, { Component } from 'react'

import axios from 'axios'

export class FetchData extends Component {
  static displayName = FetchData.name

  state = { forecasts: [], loading: true }

  componentDidMount() {
    axios('/api/SampleData/WeatherForecasts').then(resp => {
      this.setState({ forecasts: resp.data, loading: false })
    })
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast => (
            <tr key={forecast.dateFormatted}>
              <td>{forecast.dateFormatted}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      FetchData.renderForecastsTable(this.state.forecasts)
    )

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    )
  }
}
