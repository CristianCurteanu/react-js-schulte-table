import React, { Component } from 'react'
import { render } from 'react-dom'

export default class SuccessMessage extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" disabled={this.props.disabled} data-toggle="tab" href="#home" role="tab">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" disabled={this.props.disabled} data-toggle="tab" href="#stats" role="tab">Stats</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" disabled={this.props.disabled} data-toggle="tab" href="#settings" role="tab">Settings</a>
          </li>
        </ul>
      </div>
    )
  }
}
