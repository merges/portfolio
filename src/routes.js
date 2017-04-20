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
		trigger: [ 
			// 'skully.instagram.mp4',
			'skully.icons.jpg',
		],
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
		trigger: [ 
			'trig.rakuten.jpg',
			'skully.casestudy.mp4',
		],
		assets: [],
	},
	microsoft: {
		name: 'Microsoft',
		description: 'Microsoft client description',
		recent: false,
		logo: 'msft.logo.svg',
		trigger: [ 
			'trig.msft.insights.mp4',
			'trig.msft.platform.mp4',
			'trig.msft.productivity.mp4',
			'trig.msftsocial.mp4',
		],
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
		trigger: [ 
			'trigger.cashme1.jpg',
			'skully.instagram.mp4',
		],
		assets: [
			'nicecollective.brand.mp4'
		],
	},
	womenstennisassociation: {
		name: 'WTA',
		description: 'WTA client description',
		recent: false,
		logo: 'wta.logo.svg',
		trigger: [ 
			'wta2.jpg',
			'wta1.jpg',
			'wta4.jpg',
		],
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
		trigger: [ 
			'trig.sbux.site1.mp4',
		],
		assets: [],
	},
	americangiant: {
		name: 'American Giant',
		description: 'American Giant client description',
		recent: false,
		logo: 'ag.logo.svg',
		trigger: [ 
			'trig.ag.shrts.mp4',
		],
		assets: [
			'https://player.vimeo.com/video/64771645',
		]
	},
	nba: {
		name: 'NBA',
		description: 'NBA client description',
		recent: false,
		logo: 'nba.logo.svg',
		trigger: [ 
			'nba.print.2011.d.jpg',
			'trig.1.nba1.jpg',
		],
		assets: [
			'nba.print.evo.jpg',
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
		trigger: [
			'trig.1.googleguy.jpg',
			'trig.1.googlemaps.jpg',
		],
		assets:[],
	},
	chanel: {
		name: 'Chanel',
		description: 'Chanel client description',
		recent: false,
		logo: 'chanel.logo.svg',
		trigger: [
			'trig.1.chanel.1.jpg',
			'trig.chanel.2.jpg',
		],
		assets: [
			'chanel1.jpg',
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
		trigger: [ 
			'trig.1.xfinity.tiredw.jpg',
			'trig.1.billjr.jpg',
		],
		assets: [
			'https://player.vimeo.com/video/31774592',
		],
	},
	chevrolet: {
		name: 'Chevrolet',
		description: 'Chevrolet client description',
		recent: false,
		logo: 'chevrolet.logo.svg',
		trigger: [
			'trig.chevy.1.jpg',
			'trig.chevy.2.jpg',
			'trig.chevy.3.jpg',
		],
		assets: [],
	},
	paypal: {
		name: 'PayPal',
		description: 'PayPal client description',
		recent: false,
		logo: 'paypal.logo.svg',
		trigger: [ 
			'trig.paypal.logo.png',
		],
		assets: [],
	},
	ea: {
		name: 'Electronic Arts',
		description: 'EA client description',
		recent: false,
		logo: 'ea.logo.svg',
		trigger: [ 
			'trig.1.crisis3.jpg',
			'trig.crysis.banners.jpg',
		],
		assets: [],
	},
	commonwealthbank: {
		name: 'Common wealth bank of Australia',
		description: 'CBA client description',
		recent: false,
		logo: 'cbank.logo.svg',
		trigger: [ 
			'trig.1.cba.jpg',
			' trig.cba.print1.jpg',
		],
		assets: [],
	},
	hewlettpackard: {
		name: 'Hewlett Packard',
		description: 'Hewlett Packard client description',
		recent: false,
		logo: 'hp.logo.svg',
		trigger: [ 
			'trig.hp.1.jpg',
		],
		assets: [],
	},
	sfgov: {
		name: 'SFGov DCYF',
		description: 'SFGov DCYF client description',
		recent: false,
		logo: 'sf.logo.png',
		trigger: [
			'trig.sfgov.print.jpg'
		],
		assets: [],
	},
	ubisoft: {
		name: 'Ubisoft',
		description: 'Ubisoft client description',
		recent: false,
		logo: 'ubisoft.logo.svg',
		trigger: [
			'trigger.cashme1.jpg',
		],
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