import _ from 'lodash'
import React, { Component } from 'react'

import { canUserViewClient } from './utilities'

class Nav extends Component {
  state = { expanded: false }

  componentWillMount () {
    this.setState({ list: this.calculateOrderedVisibleClientList(this.props.clients) })
  }

  componentWillReceiveProps (nextProps) {
    if (!_.isEqual(nextProps.currentlyAt, this.props.currentlyAt)) {
      this.setState({ list: this.calculateOrderedVisibleClientList(nextProps.clients) })
    }
  }

  calculateOrderedVisibleClientList (clients) {
    let orderedList = []
    _.forEach(_.keys(clients), clientCode => {
      const client = clients[clientCode]
      const userCanView = canUserViewClient(client)
      if (userCanView) {
        orderedList.push(clientCode)
      }
    })
    return orderedList
  }

  collapseNav = () => {
    this.setState({
      expanded: false
    })
  }

  expandNav = () => {
    this.setState({
      expanded: true
    })
  }

  navigateToHome = () => {
    this.props.history.push('/')
  }

  navigateToClient = (clientCode) => {
    this.props.history.push('/client/' + clientCode)
  }

  toggleNav = () => {
    if (this.state.expanded === true) {
      this.collapseNav()
    }
    if (this.state.expanded === false) {
      this.expandNav()
    }
  }

  render () {
    const { clients, currentlyAt } = this.props
    const { list } = this.state
    const currentIndex = list.indexOf(currentlyAt)
  	const lastIndex = list.length - 1

  	// Set up the correct previousIndex, based on where we are now
  	var previousIndex
		if (currentIndex === 0) {
			previousIndex = lastIndex	
		}
		else {
			previousIndex = currentIndex - 1
		}

		// Set up the correct nextIndex, based on where we are now
		var nextIndex 
		if (currentIndex === lastIndex) {
			nextIndex = 0
		}
		else {
			nextIndex = currentIndex + 1
		}

    var navClassName = 'nav'
    if (this.state.expanded === true) {
      navClassName = 'nav open'
    }

    return (
      <section
        className={navClassName}
        onMouseEnter={() => this.expandNav()}
        onMouseLeave={() => this.collapseNav()} 
        onClick={() => this.toggleNav()}
      >
        <h3>{this.props.name}</h3>
        <div className="description">{this.props.description}</div>     	
  			<div className='navPanel'> 
        	<a className='previousbutton' onClick={(clientCode) => this.navigateToClient(list[previousIndex])}>&lt;</a> 
        	<a className='homebutton' onClick={() => this.navigateToHome()}>home</a> 
  				<a className='nextbutton' onClick={(clientCode) => this.navigateToClient(list[nextIndex])}>&gt;</a>
        </div>
      </section>
    )
  }
}

Nav.defaultProps = {
  clients: [],
}

export default Nav
