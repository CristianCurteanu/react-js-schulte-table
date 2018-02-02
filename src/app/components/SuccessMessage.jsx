import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import storage from '../helpers/database.js'
import Statistics from '../helpers/statistics.js'

class SuccessMessage extends React.Component {
  render() {
      var trx = storage.result.transaction('statistics', 'readwrite')
      var store = trx.objectStore('statistics')

      store.add({
        timestamp: new Date().getTime(),
        result: this.props.state.end
      })

      store.oncomplete = () => {
        storage.result.close()
      }

      Statistics().update()
      return (<div>
        <h1>
          Success!!! You have completed by { this.props.state.end } seconds
        </h1>
        <button className="btn-primary" onClick={this.props.onReset.bind(this)}>Start new game</button>
      </div>)
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onReset: (id) => {
      window.location = '/'
    }
  })
)(SuccessMessage)
