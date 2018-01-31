import React from 'react'
import { render } from 'react-dom';
import { connect } from 'react-redux'

import Cell from './Cell.jsx'

class App extends React.Component {
  render() {
    var content

    if (this.props.state.finish) {
      content = <div className="row"> Success!!! </div>
    } else {
      content = this.props.grid.map((row, index) =>
        <div className="row">
          { row.map((cell, index) => <Cell id={cell.id} enabled={cell.enabled} />) }
        </div>
      )
    }
    return (
      <div className="container">
        <div className="row">
          Schulte Table
        </div>
        { content }
      </div>
    )
  }
}

export default connect(
  state => ({
    grid: state.grid.table,
    state: state.grid
  })
)(App)
