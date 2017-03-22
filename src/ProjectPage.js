import React, { Component } from 'react'

// Import other components that this needs
import Presentation from './Presentation'
import Nav from './Nav'

class ProjectPage extends Component {
	render () {
    const projectUrl = this.props.match.params.name
    // result e.g. 'skully'

    const project = this.props.projects[projectUrl]
    // result e.g.
  	// skully: {
		// 	name: 'Skully Brand',
		// 	description: 'A description of the Skully project',
		// 	assets: [
		// 		'skully.poster.jpg',
		// 		'skully.casestudy.mp4',
		// 	],
		// },

		if (!project) {
			return (
				<div>
					There’s no item in <strong>projects</strong> for <strong>{projectUrl}</strong>
				</div>
			)
		}

    return (
      <div className='project'>
      	<Presentation
      		assets={project.assets}
      	/>
	      <Nav
	      	description={project.description}
	      	name={project.name}
	      />
	    </div>
    )
  }
}

export default ProjectPage
