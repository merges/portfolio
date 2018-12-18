import React, { Component } from 'react'

import DisplayZone from './DisplayZone'
import LogInBox from './LogInBox'
import Nav from './Nav'

class ClientPage extends Component {
	constructor (props) {
		super (props)

		this.state = {
			clientName: props.match.params.name,		// From URL
			// the user loaded up http://jeffmunar.com/client/skully
	    // ReactRouter defines the last bit of the URL as this.props.match.params.name, so...
	    // clientNameInUrl === 'skully'

			client: props.clients[props.match.params.name]		// From client data object
			// this.props.clients[clientNameInUrl] means "look in this.props.clients for an item
	    // called whatever clientNameInUrl stands for right now", so...
	    // this.props.clients['skully']
	    // and what we get is that particular client, so...
	    // selectedClient === skully: {
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

	componentWillUpdate (nextProps) {
		let nextName = nextProps.match.params.name
		let lastName = this.state.clientName
		if (nextName !== lastName) {
			this.setState({
				clientName: nextName,
				client: this.props.clients[nextName]
			})
		}
	}

	render () {
		const { clients, isLoggedIn, orderedClientList } = this.props
		const { client, clientName } = this.state

		if (!client) {
			return (
				<div className="clientpage center-all" style={{ height: '100vh' }}>
					<div>Sorry, there’s no <strong>{clientName}</strong> here.</div>
				</div>
			)
		}

		const needsPassword = client.protected === true && isLoggedIn === false
		if (needsPassword) {
			return (
				<div className="clientpage center-all" style={{ height: '100vh' }}>
					{client.previewAsset ?
						<img src={'../../assets/' + client.previewAsset} style={{ maxWidth: '80%' }} />
						:
						<div>Ask Jeff for the password.</div>
					}
					<LogInBox
						whichClient={clientName}
						onCorrectPassword={this.props.onLogIn}
						showCloseButton={false}
					/>
				</div>
			)
		}

		return (
      <div className="clientpage">
 				<DisplayZone
	 				key={clientName}
      		assets={client.assets}
      	/>
	      <Nav
	      	clients={clients}
	      	currentlyAt={clientName}
	      	description={client.description}
	      	name={client.name}
	      	orderedClientList={orderedClientList}
	      	{...this.props}
	      />
	    </div>
    )
  }
}

export default ClientPage
