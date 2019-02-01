import React from 'react'
import { render } from 'react-dom';
import { connect } from 'react-redux'

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      enabled: props.enabled
    }
  }

  classList(enabled) {
    console.log(this.props)
    return "col-sm-2 btn " + (enabled ? "btn-primary" : "disabled") + (this.props.center ? " center" : '')
  }

  clickButton() {
    this.props.onBtnClicked(this.props.id)
  }

  render() {
    return (
      <button className={this.classList(this.props.enabled)} disabled={!this.props.enabled} onClick={this.clickButton.bind(this)}>
        { this.props.id }
      </button>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onBtnClicked: (id) => {
      dispatch({
        type: 'CLICK_BUTTON',
        payload: {id, enabled: false}
      })
    }
  })
)(Cell)
