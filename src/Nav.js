import React, { Component } from 'react'

class Nav extends Component {
  render () {
  	console.log(this.props)
    return (
      <section className='nav'>
      	{this.props.name}<br />
      	{this.props.description}
      	<h3>&lt; previous</h3>
      	<h3>next &gt;</h3>
      </section>
    )
  }
}

export default Nav
