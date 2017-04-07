import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './HomePage'
import ClientPage from './ClientPage'

// Different kinds of variables
//
// const aBoolean = true (a boolean can either be true or false)
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


const triggerAssets = [
	'trig.1.crisis3.jpg',
	'trig.1.wta2.jpg',
	'trig.1.wta3.jpg',
	'trig.1.wta4.jpg',
	'trig.1.bp1.jpg',
	'trig.1.bp2.jpg',
	'trig.1.billjr.jpg',
]

const orderedClientList = [
	'adobe', 
	'microsoft', 
	'nba', 
	'skully',
	'nicecollective',
]

const clients = {
	skully: {
		name: 'Skully',
		description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  Aliquam at libero vitae lorem ultrices lobortis id a nisl.  Pellentesque odio eros, hendrerit non ornare quis, egestas  et massa.',
		recent: true,
		logo: 'wta.logo.svg',
		assets: [
			'skully.casestudy.mp4',
			'skully.site.mp4',
			'skully.app.jpg',
			'skully.display.jpg',
			'skully.onesheet.jpg',
			'skull.editorial.jpg',
			'skully.poster.jpg',
			'skully.instagram.mp4',
			'skully.icons.jpg',
			'skully.ridermark.jpg',
			'skully.onesheetsi.jpg',
			'https://player.video.com/432894872309432?blablabla',
			'https://player.video.com/543534?blablabla',
			'https://player.video.com/8905823905823905890234?blablabla'
		],
	},
	adobe: {
		name: 'Adobe',
		description: 'Adobe client description',
		recent: false,
		logo: 'adobe.icon.svg',
		assets: [],
	},
	microsoft: {
		name: 'Microsoft',
		description: 'Microsoft client description',
		recent: false,
		logo: 'msft.logo.svg',
		assets: [
						'https://player.vimeo.com/video/93536698',
						'https://player.vimeo.com/video/93536697',
						'https://player.vimeo.com/video/93536696',
						'https://player.vimeo.com/video/93536695',
	],
	},
	nicecollective: {
		name: 'Nice Collective',
		desription: 'Nice Collective description',
		recent: true,
		logo: 'wta.logo.svg',
		assets: [
			'nicecollective.brand.mp4'
		],
	},
	womenstennisassociation: {
		name: 'WTA',
		description: 'WTA client description',
		recent: false,
		logo: 'wta.logo.svg',
		assets: [
		'wta1.jpg',
		'wta2.jpg',
		'wta3.jpg',
		'wta4.jpg',
		'wta5.jpg',
		],
	},
	starbucks: {
		name: 'starbucks',
		description: 'starbucks client description',
		recent: false,
		logo: 'starbucks.logo.svg',
		assets: [],
	},
	americangiant: {
		name: 'American Giant',
		description: 'American Giant client description',
		recent: false,
		logo: 'ag.logo.svg',
		assets: [
						'https://player.vimeo.com/video/64771645',]
					},
	nba: {
		name: 'NBA',
		description: 'NBA client description',
		recent: false,
		logo: 'nba.logo.svg',
		assets: ['nba.print.evo.jpg',
					'nba.print.finals2010.jpg',
					'https://player.vimeo.com/video/31774693',
					'nba.print.2010a.jpg',
					'nba.print.2010.b.jpg',
					'nba.print.2010.c.jpg',
					'nba.print.2011.d.jpg',
		],
	},
	googlemaps: {
		name: 'Google Maps',
		description: 'Google Maps client description',
		recent: false,
		logo: 'google.logo.svg',
		assets: [],
	},
	chanel: {
		name: 'Chanel',
		description: 'Chanel client description',
		recent: false,
		logo: 'chanel.logo.svg',
		assets: ['chanel1.jpg',
						'chanel2.jpg',
						'chanel3.jpg',
						'chanel4.jpg',
						'chanel5.jpg',
						'chanel6.jpg',

		],
	},
	comcastxfinity: {
		name: 'xfinity',
		description: 'xfinity client description',
		recent: false,
		logo: 'xfinity.logo.svg',
		assets: ['https://player.vimeo.com/video/31774592',
		],
	},
	chevrolet: {
		name: 'Chevrolet',
		description: 'Chevrolet client description',
		recent: false,
		logo: 'chevrolet.logo.svg',
		assets: [],
	},
	paypal: {
		name: 'PayPal',
		description: 'PayPal client description',
		recent: false,
		logo: 'paypal.logo.svg',
		assets: [],
	},
	ea: {
		name: 'Electronic Arts',
		description: 'EA client description',
		recent: false,
		logo: 'ea.logo.svg',
		assets: [],
	},
	commonwealthbank: {
		name: 'Common wealth bank of Australia',
		description: 'CBA client description',
		recent: false,
		logo: 'cbank.logo.svg',
		assets: [],
	},
	hewlettpackard: {
		name: 'Hewlett Packard',
		description: 'Hewlett Packard client description',
		recent: false,
		logo: 'hp.logo.svg',
		assets: [],
	},
	sfgov: {
		name: 'SFGov DCYF',
		description: 'SFGov DCYF client description',
		recent: false,
		logo: 'sf.logo.png',
		assets: [],
	},
	ubisoft: {
		name: 'Ubisoft',
		description: 'Ubisoft client description',
		recent: false,
		logo: 'ubisoft.logo.svg',
		assets: [],
	},

}

// Render our custom home page component
const renderHomePage = (props) => {
	return (
		<HomePage
			clients={clients}
			triggerAssets={triggerAssets}
			{...props}
		/>
	)
}



// Render our custom client page component

const renderClientPage = (props) => {
	return (
		<ClientPage
			clients={clients}
			orderedClientList={orderedClientList}
			{...props}
		/>
	)
}

const Routes = (props) => {
	return (
	  <Router {...props}>
	  	<div>
	  		<Route exact path='/' render={renderHomePage} />
		    <Route path='/client/:name' render={renderClientPage} />
		    {/*<Route path='*' component={NotFound} />*/}
		  </div>
	  </Router>
	)
}

export default Routes