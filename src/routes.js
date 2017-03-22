import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './HomePage'
import ProjectPage from './ProjectPage'

// const aNumber = 40
// const aString = 'hello jeff'
// const anArray = [
// 	20,
// 	40,
// 	60,
// 	80,
// ]
// const anObject = {
// 	name: 'skully',
// 	description: 'shitty company, nice design',
// 	assets: [
// 		'skully.poster.jpg',
// 		'skully.casestudy.mp4',
// 	]
// }

const projects = {
	skully: {
		name: 'Skully',
		description: 'A description of the Skully project',
		assets: [
			'skully.casestudy.mp4',
			'skully.poster.jpg',
			'skully.casestudy.mp4',
			'skully.casestudy.mp4',
		],
	},
	adobe: {
		name: 'Adobe',
		description: 'Adobe project description',
		assets: [],
	},
	microsoft: {
		name: 'Microsoft',
		description: 'Microsoft project description',
		assets: [],
	},
}

// Explanation of why we need these to come later...
const HomePageWithProjects = (props) => {
	return (
		<HomePage
			projects={projects}
			{...props}
		/>
	)
}

const ProjectPageWithProjects = (props) => {
	return (
		<ProjectPage
			projects={projects}
			{...props}
		/>
	)
}

const Routes = (props) => (
  <Router {...props}>
  	<div>
  		<Route exact path='/' render={HomePageWithProjects} />
	    <Route path='/project/:name' render={ProjectPageWithProjects} />
	    {/*<Route path='*' component={NotFound} />*/}
	  </div>
  </Router>
)

export default Routes