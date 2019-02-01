import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Chart from 'chart.js'
import Stats from '../helpers/statistics.js'

export default class Class extends Component {

  componentDidMount() {
    Stats().update()
  }

  render() {
    return (
      <div>
        <canvas id="stats-chart" width="400" height="400" ></canvas>
      </div>
    )
  }
}
