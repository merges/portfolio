import _ from 'lodash'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './HomePage'
import ClientPage from './ClientPage'
import PastClientsPage from './PastClientsPage'

// Import client data and make shortcuts to each bit of data
import clientData from './clientData'

class App extends React.Component {
	render () {
		const props = this.props

		// Render our custom home page component
		const renderHomePage = (props) => {
			return (
				<HomePage
          clients={clientData.clients}
          triggerAssets={clientData.triggerAssets}
					{...props}
				/>
			)
		}

		const renderPastClientsPage = (props) => {
		  return (
		    <PastClientsPage
          clients={clientData.clients}
          triggerAssets={clientData.triggerAssets}
		      {...props}
		    />
		  )
		}

		// Render our custom client page component
		const renderClientPage = (props) => {
			return (
				<ClientPage clients={clientData.clients} {...props} />
			)
		}

		return (
		  <Router {...props}>
		  	<div>
          <Route exact path='/' render={renderHomePage} />
			    <Route path='/client/:name' render={renderClientPage} />
	        <Route path='/pastclients' render={renderPastClientsPage} />
			  </div>
		  </Router>
		)
	}
}

export default App
