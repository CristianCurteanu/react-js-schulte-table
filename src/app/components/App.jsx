import React from 'react'
import { render } from 'react-dom';
import { connect } from 'react-redux'
import Cell from './Cell.jsx'
import storage from '../helpers/database.js'
import '../styles/index.scss'

class App extends React.Component {
  render() {
    var content

    if (this.props.state.finish) {
      var trx = storage.result.transaction('statistics', 'readwrite')
      var store = trx.objectStore('statistics')

      store.add({
        timestamp: new Date().getTime(),
        result: this.props.state.end
      })

      trx.oncomplete = () => {
        storage.result.close()
      }

      content = <p>
        Success!!! You have completed by { this.props.state.end } seconds
      </p>
    } else {
      content = <div>
        <p>Next: { this.props.state.next } </p>
        {this.props.grid.map((row, index) =>
          <div className="row">
            { row.map((cell, index) => <Cell id={cell.id} enabled={cell.enabled} />) }
          </div>
        )}
      </div>
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
