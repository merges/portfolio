import React, { Component } from 'react'

class LogInBox extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
    	password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.hidePastWork = this.hidePastWork.bind(this)
  }

  handleChange (event) {
    this.setState({
    	password: event.target.value
    })
  }

  handleSubmit (event) {
    console.log('A password was submitted: ' + this.state.password)
    event.preventDefault()
  }

  hidePastWork () {
  	this.props.onHidePastWork()
  }

  render () {
		return (
    	<div className='nav open'>
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          <input className='loginBox' type='password' placeholder='Password Required' value={this.state.password} onChange={this.handleChange} />
	        </label>
	        <input className='loginButton' type='submit' value='See past work' />
	      </form>
	      <div className='loginClose' onClick={() => this.hidePastWork()}>X</div>
	    </div>
    )
  }
}

export default LogInBox