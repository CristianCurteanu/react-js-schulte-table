import React from 'react'
import { render } from 'react-dom';
import Cell from './Cell.jsx'

export default class RowMapper extends React.Component {
  render() {
    var rows = this.props.grid.map((row, index) =>
      <div className="row">
        { row.map((cell, index) => <Cell id={cell.id} enabled={cell.enabled} />) }
      </div>
    )
    return (
      <div>
        <p>Next: { this.props.next } </p>
        { rows }
      </div>
    )
  }
}
