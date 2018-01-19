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
		
const clients = {
	skully: {
		name: 'Skully',
		description: 'The Skully AR-1 is the world\'s first Augmented Reality motorcycle helmet on the road with a built-in 180° Blindspot Camera and infinite Focus Heads-Up Display.', 
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
			'skully.selfie.jpg',
			'skully.display.jpg',
			'skully.onesheet.jpg',
			'skull.editorial.jpg',
			'skully.poster.jpg',
			'skully.instagram.mp4',
			'skully.icons.jpg',
			'skully.ridermark.jpg',
			'skully.hoodie.jpg',
			'skully.whitesheet.s.jpg',
			'https://player.video.com/432894872309432?blablabla',
			'https://player.video.com/543534?blablabla',
			'https://player.video.com/8905823905823905890234?blablabla',

		],
	},
	adobe: {
		name: 'Adobe',
		description: 'Print executions for Adobe collaborations with Burberry, Rakuten and Gree (Print; JP Markets). Additional content for Adobe Museum Digital Media',
		recent: false,
		logo: 'adobe.icon.svg',
		trigger: [
			'trig.rainbow.mp4',
			'trig.rakuten.jpg',
		],
		assets: ['adobe.mariko.1.jpg','adobe.burberry.jp.jpg','adobe.gree.jp.jpg','adobe.rakuten.jp.jpg'],
	},
	microsoft: {
		name: 'Microsoft',
		description: 'Each and every business is unique. From healthcare to retail, manufacturing or finance — no two businesses operate the same way. That’s why the Microsoft Cloud can be tailored to meet the needs of any enterprise.',
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
			'msft.hero.print1.jpg',
			'msft.hero.print2.jpg',
			'msft.hero.print3.jpg',
			'msft.hero.print4.jpg',
			'msft.hero.print5.jpg',
			'msft.hero.print6.jpg',
		],
	},
	nicecollective: {
		name: 'Nice Collective',
		description: 'N.I.C.E. (Navigators, Informers, Creators, Explorers) The Collective experiments with utilitarian and conceptual elements within the context of clothing and accessories.', 
		recent: true,
		logo: 'wta.logo.svg',
		trigger: [ 
			'trigger.cashme1.jpg',
			'skully.instagram.mp4',
		],
		assets: [
			'nicecollective.brand.mp4',
			'nice.site.overview1.mp4',
			'nice.styling1.jpg',
			'nice.styling2.jpg',
			'nice.styling3.jpg',
			'nice.styling4.jpg',
			'nice.styling5.jpg',
			'nice.diytutorials.jpg',
			'nice.home.jpg',
			'nice.scan1.jpg',
			'nice.scan2.jpg',
			'nice.scan3.jpg',
			'nice.store1.jpg',
			'nice.hq.jpg',


		],
	},
	womenstennisassociation: {
		name: 'WTA',
		description: 'Brand Guidelines and Styleguide for the Women\'s Tennis Association',
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
		name: 'Starbucks',
		description: 'Website for Coffee Stories: promoting coffees that can be found in grocery stores.',
		recent: false,
		logo: 'starbucks.logo.svg',
		trigger: [ 
			'trig.sbux.site1.mp4',
		],
		assets: [
			
			'sbux.menu.holiday.jpg',
			'sbux.breakfast.jpg',
			'sbux.espresso.jpg',
			'sbux.home.holiday.jpg',
		
		],
	},
	americangiant: {
		name: 'American Giant',
		description: 'The American Giant Launch consisted of a Brandbook + Ethos, Brand video and digital marketing (website, display, blog)',
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
		description: 'This was a campaign promoting the playoffs which was used across print, outdoor, in-store, interactive, broadcast and even down to the coasters at the Finals. I\'m an Angeleno at heart; I couldn\'t let the Lakers down.',
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
		description: 'Google Maps is the world’s most trusted map. We inspire confidence in over 1 billion people worldwide to explore the world around them. People count on us and we don’t take this responsibility lightly. Our brand is a commitment and promise to our users.',
		recent: false,
		logo: 'google.logo.svg',
		trigger: [
			'trig.gmaps.scroll.mp4',
			'trig.1.googleguy.jpg',
			],
		assets:['gmaps.overview.mp4'],
	},
	chanel: {
		name: 'Chanel',
		description: 'iPad/desktop design iterations for the Chanel Heritage site. The goal was to educate the Chinese and Russian markets about the French fashion designer, Gabrielle Bonheur "Coco" Chanel and her brand.',
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
		description: 'Comcast/Xfinity rolled out with a digital campaign of the Famed Slowskys as they prepared to announce breaking news to the world.',
		recent: false,
		logo: 'xfinity.logo.svg',
		trigger: [ 
			'trig.1.xfinity.tiredw.jpg',
			'trig.1.billjr.jpg',
			'trig.slowskys.mp4',
		],
		assets: [
			'https://player.vimeo.com/video/31774592',
		],
	},
	chevrolet: {
		name: 'Chevrolet',
		description: 'Print and Digital campaigns to promote an armada of vehicles.',
		recent: false,
		logo: 'chevrolet.logo.svg',
		trigger: [
			'ralph.jpg',
		],
		assets: ['chevy.1.jpg',
			'chevy.2.jpg',
			'chevy.3.jpg'],
	},
	paypal: {
		name: 'PayPal',
		description: 'Digital and Email marketing promoting different financial tools.',
		recent: false,
		logo: 'paypal.logo.svg',
		trigger: [ 
			'trig.ralph.jpg',
		],
		assets: ['paypal.eblast.jpg'],
	},
	ea: {
		name: 'Electronic Arts',
		description: 'Digital promotions for Crysis3',
		recent: false,
		logo: 'ea.logo.svg',
		trigger: [ 
			'trig.1.crisis3.jpg',
		],
		assets: ['ea.crysis3.jpg',
		'ea.crysis3.ign.jpg',
		'ea.crysis.banners.jpg'],
	},
	commonwealthbank: {
		name: 'Common wealth bank of Australia',
		description: 'Print, Digital, OOH',
		recent: false,
		logo: 'cbank.logo.svg',
		trigger: [ 
			'trig.1.cba.jpg',
			'trig.cba.print1.jpg',
		],
		assets: ['cbank_rm2.jpg', 'cbank_rm3.jpg', 'cbank.calendar.jpg'],
	},
	hewlettpackard: {
		name: 'Hewlett Packard',
		description: 'Print, Digital, OOH and Branding',
		recent: false,
		logo: 'hp.logo.svg',
		trigger: [ 
			'trig.hp.social.jpg',
		],
		assets: ['hp.digital.jpg'],
	},
	sfgov: {
		name: 'SFGov DCYF',
		description: 'Print brochures for SFGov DCYF',
		recent: false,
		logo: 'sf.logo.png',
		trigger: [
			'trig.sfgov.print.jpg',
			'trig.sfgovdcyf.jpg',
		],
		assets: ['dcyf.brochure_a1.jpg','dcyf.brochure_a2.jpg','dcyf.brochure_b1.jpg','dcyf.brochure_b2.jpg','dcyf.brochure_c1.jpg', 'dcyf.brochure_c2.jpg', 'dcyf.brochure_d1.jpg', 'dcyf.brochure_d2.jpg',
		],
	},
	ubisoft: {
		name: 'Ubisoft',
		description: 'Digital promotions and TV scripts for Watch Dogs',
		recent: false,
		logo: 'ubisoft.logo.svg',
		trigger: [
			'trig.v.z1.jpg',
			'trig.v.z2.jpg',
		],
		assets: ['WD2.jpg','WD3.jpg','WD4.jpg','WD5.jpg','WD7.jpg', 'WD13.jpg'],
	},
	haagendazs: {
		name: 'Haagen-dazs',
		description: 'Digital promotions for Haagen-dazs',
		recent: false,
		logo: 'haagendazs.logo.svg',
		trigger: [
		],
		assets: ['haagendazs.digital.jpg', 'hd.dicecream.charactersketch.1.jpg'],
	},
	sprint: {
		name: 'Sprint',
		description: 'Digital, Print and OOH promotions for Sprint',
		recent: false,
		logo: 'sprint.logo.svg',
		trigger: [
		],
		assets: ['sprint.1.jpg','sprint.2.jpg','sprint.3.jpg',],
	},
	asianlawcaucus: {
		name: 'Asian Law Caucus',
		description: 'The mission of Asian Americans Advancing Justice – Asian Law Caucus is to promote, advance, and represent the legal and civil rights of API communities. Campaign: 2020 Vision Fundraiser',
		recent: false,
		logo: 'alc.logo.svg',
		trigger: ['trig.alchero.jpg','trig.alc.fam.jpg'
		],
		assets: ['alc.2020v.mark.jpg','alc.site.jpg'],
	},
}

export default {
	clients,
}