import React from 'react'
import { render } from 'react-dom';
import { connect } from 'react-redux'
import RowMapper from './RowMapper.jsx'
import Navbar from './Navbar.jsx'
import SuccessMessage from './SuccessMessage.jsx'
import Statistics from './Statistics.jsx'
import '../styles/index.scss'

class App extends React.Component {
  render() {
    var content
    var navbar

    if (this.props.state.finish) {
      content = <SuccessMessage state={this.props.state} />
      navbar = <Navbar />
    } else {
      content = <RowMapper grid={this.props.grid} next={this.props.state.next} />
    }
    return (
      <div className="container">
        { navbar }
        <div className="tab-content">
          <div className="tab-pane active" id="home" role="tabpanel">
            { content }
          </div>
          <div className="tab-pane" id="stats" role="tabpanel">
            { <Statistics /> }
          </div>
          <div className="tab-pane" id="settings" role="tabpanel">
            Settings component
          </div>
        </div>
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
