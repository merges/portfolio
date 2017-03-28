import React, { Component } from 'react'

// Import other components that this needs
import DisplayZone from './DisplayZone'
import Nav from './Nav'

class ClientPage extends Component {
	render () {
    const clientNameInUrl = this.props.match.params.name
    // the user loaded up http://jeffmunar.com/client/skully
    // ReactRouter defines the last bit of the URL as this.props.match.params.name, so...
    // clientNameInUrl === 'skully'

    const selectedClientData = this.props.clients[clientNameInUrl]
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

		if (!selectedClientData) {
			return (
				<div>
					There’s no client in <strong>clients</strong> called <strong>{clientNameInUrl}</strong>
				</div>
			)
		}

    return (
      <div className='clientpage'>
      	<DisplayZone
      		assets={selectedClientData.assets}
      	/>
	      <Nav
	      	description={selectedClientData.description}
	      	name={selectedClientData.name}
	      />
	    </div>
    )
  }
}

export default ClientPage
