import _ from 'lodash'
import React, { Component } from 'react'

import DisplayZone from './DisplayZone'
import LogInBox from './LogInBox'
import Nav from './Nav'
import { canUserViewClient } from './utilities'

class ClientPage extends Component {
	constructor (props) {
		super(props)
		const clientCode = props.match.params.name
		const client = props.clients[props.match.params.name]
		this.state = {
			canView: canUserViewClient(client),
			client,
			clientCode,
		}
	}

	componentWillUpdate (nextProps) {
		let nextCode = nextProps.match.params.name
		let lastCode = this.state.clientCode
		if (nextCode !== lastCode) {
			this.setState({
				canView: canUserViewClient(nextProps.clients[nextCode]),
				client: this.props.clients[nextCode],
				clientCode: nextCode,
			})
		}
	}

	render () {
		const { clients } = this.props
		const { canView, client, clientCode } = this.state

		if (_.isEmpty(client)) {
			return (
				<div className="clientpage center-all" style={{ height: '100vh' }}>
					<div>Sorry, there’s no <strong>{clientCode}</strong> here.</div>
				</div>
			)
		}

		if (canView === false) {
			return (
				<div className="clientpage center-all" style={{ height: '100vh' }}>
					{client.previewAsset ?
						<img src={'../../assets/' + client.previewAsset} style={{ maxWidth: '80%' }} />
						:
						<div>Ask Jeff for the password.</div>
					}
					<LogInBox
						client={client}
						onCorrectPassword={() => this.setState({ canView: true })}
						showCloseButton={false}
					/>
				</div>
			)
		}

		return (
      <div className="clientpage">
 				<DisplayZone
	 				key={clientCode}
      		assets={client.assets}
      	/>
	      <Nav
	      	clients={clients}
	      	currentlyAt={clientCode}
	      	description={client.description}
	      	name={client.name}
	      	{...this.props}
	      />
	    </div>
    )
  }
}

export default ClientPage
