import React, { Component } from 'react'

class Nav extends Component {
  render () {
    return (
      <section className='nav'>
      	{this.props.name}<br />
      	{this.props.description}
      </section>
    )
  }
}

export default Nav
