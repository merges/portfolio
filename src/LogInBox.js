import _ from 'lodash'
import React, { Component } from 'react'

import { doesPasswordMatch, saveClientPermissions } from './utilities'

class LogInBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
    	password: '',
    	closeButtonShouldBeX: false,
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        closeButtonShouldBeX: true
      })
    }, 200)
  }

  handleChange = (event) => {
    this.setState({
    	password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { client, onCorrectPassword } = this.props
    const { password } = this.state
    const isCorrectPassword = doesPasswordMatch({ client, password})

    if (isCorrectPassword) {
      this.setState({
        correctPassword: true
      })
      if (_.isFunction(onCorrectPassword)) {
        onCorrectPassword()
      }
      saveClientPermissions(client)
    }
    else {
      this.setState({
        correctPassword: false
      })
    }
  }

  hideLogInBox = () => {
  	this.props.onHideLogInBox()
  }

  render () {
    const { showCloseButton } = this.props
  	let closeButtonClassName = 'loginClose'
  	
    if (this.state.closeButtonShouldBeX === true) {
  		closeButtonClassName = 'loginClose active'
  	}

		return (
    	<div className='nav open'>
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          <input className='loginBox' type='password' placeholder='Password Required' value={this.state.password} onChange={this.handleChange} />
	        </label>
	        <input className='loginButton' type='submit' value='Submit' />
          <span className='message'>
            {this.state.correctPassword === true && 'Yup.'}
            {this.state.correctPassword === false && 'Nope.'}
          </span>
	      </form>
        {showCloseButton &&
  	      <div className={closeButtonClassName} onClick={() => this.hideLogInBox()}>
  	      	<div className='patty'></div>
  	      	<div className='patty'></div>
  	      </div>
        }
	    </div>
    )
  }
}

LogInBox.defaultProps ={
  showCloseButton: true,
}

export default LogInBox
