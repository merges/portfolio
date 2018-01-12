import React, { Component } from 'react'

// Import other components that this needs
import DisplayZone from './DisplayZone'
import Nav from './Nav'

// // When we set this up:
// <MyComponent
// 	className='anything'
// 	name='Jeff'
// 	width={400}
// 	data={myObject}
// />
// // ... then WITHIN MyComponent:
// this.props.className === 'anything'
// this.props.name === 'Jeff'
// this.props.width === 400
// ...


class ClientPage extends Component {
	constructor (props) {
		super (props)
		
		this.state = {
			clientName: props.match.params.name,		// From URL
			// the user loaded up http://jeffmunar.com/client/skully
	    // ReactRouter defines the last bit of the URL as this.props.match.params.name, so...
	    // clientNameInUrl === 'skully'

			clientData: props.clients[props.match.params.name]		// From client data object
			// this.props.clients[clientNameInUrl] means "look in this.props.clients for an item
	    // called whatever clientNameInUrl stands for right now", so...
	    // this.props.clients['skully']
	    // and what we get is that particular client, so...
	    // selectedClientData === skully: {
			// 	name: 'Skully Brand',
			// 	description: 'A description of the Skully client',
			// 	assets: [
			// 		'skully.poster.jpg',
			// 		'skully.casestudy.mp4',
			//		etc.
			// 	],
			// },
		}
	}

	componentWillUpdate(nextProps) {
		let nextName = nextProps.match.params.name
		let lastName = this.state.clientName

		if (nextName !== lastName) {
			this.setState({
				clientName: nextName,
				clientData: this.props.clients[nextName]
			})
		}
	}

	render () {
		// console.log(this.props.orderedClientList)
		// console.log('this.props is:')
		// console.log(this.props)
		// console.log(this.props.clients)
		// console.log(this.props.clients.skully.assets)

		if (!this.state.clientData) {
			return (
				<div>
					There’s no client in <strong>clients</strong> called <strong>{this.state.clientName}</strong>
				</div>
			)
		}

		if (this.props.isLoggedIn === false && this.state.clientData.recent === false) {
			return (
				<div>
					Ask Jeff for the password.
				</div>
			)
		}

		return (
      <div className='clientpage'>
 				<DisplayZone
	 				key={this.state.clientName}
      		assets={this.state.clientData.assets}
      	/>
	      <Nav
	      	description={this.state.clientData.description}
	      	name={this.state.clientData.name}
	      	currentlyAt={this.state.clientName}
	      	clients={this.props.clients}
	      	orderedClientList={this.props.orderedClientList}
	      	{...this.props}
	      />
	    </div>
    )
  }
}

export default ClientPage
