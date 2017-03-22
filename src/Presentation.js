import React, { Component } from 'react'

class Presentation extends Component {
  render () {
  	// Go through this.props.assets, in sequence,
  	// figure out what kind of asset it is,
  	// and then spit out the correct HTML for that
  	// kind of asset

    return (
    	<div className='presentation'>
    		{
    			this.props.assets.map((fileName, i) => {
    				// If the filename has a video extension
    				// e.g. 'mp4', 'mov'
    				// return a div for a video
    				if (fileName.includes('mp4') || fileName.includes('mov')) {
    					return (
    						<div key={i} className='asset'>
				    			<video autoPlay loop>
				    				<source src={'../../assets/' + fileName} />
				    			</video>
				    		</div>
    					)
    				}
    				// if the filename has a graphic extension
    				// e.g. 'png', 'gif'
    				// return a div for a graphic
    				if (fileName.includes('png') || fileName.includes('gif') || fileName.includes('jpg')) {
    					return (
    						<div key={i} className='asset'>
    							<img src={'../../assets/' + fileName} role='presentation' />
    						</div>
    					)
    				}
    				// Asset isn’t a type we recognize, so return nothing
    				return (
    					<noscript />
    				)
    			})
    		}
      </div>
    )
  }
}

export default Presentation
