const state = () => ({
	isEditing: true, 
	currentProfileCreationStep: 1,
	// intro
	coverPhotoUrl: '',
	companyLogoUrl: '',
	companyName: '',
	quickPitch: 'Funky fresh sustainable wears for people who cares',
	totalJobs: 16,
	values: {
		1: {
			icon: 'seedling',
			title: 'We are sustainable'
		},
		2: {
			icon: 'seedling',
			title: 'We are inclusive'
		},
		3: {
			icon: 'seedling',
			title: 'We are honest'
		},
		4: {
			icon: 'seedling',
			title: ''
		},
		5: {
			icon: 'seedling',
			title: ''
		},
		6: {
			icon: 'seedling',
			title: ''
		}
	},
	companyVision: 'TALA is a new brand of athleisure and activewear that holds sustainability at its core. Garments are produced and hand finished in Portugal where a number of steps have been taken to ensure every step of the process is as sustainable as possible. \n Partnering with a world-leading facility has ensured that the garments not only fulfil the functionality demanded by the customer but also lessen the footprint by spinning the required yarn and fibres on site.',
	benefits: {
		1: {
			title: 'Breakfast',
			subtitle: 'A mix of cereals, pastry and fruits available',
			imgFile: null,
			imgUrl: ''
		},
		2: {
			title: 'yoga classes',
			subtitle: 'With our lovely resident wellness coach Hillary',
			imgFile: null,
			imgUrl: ''
		},
		3: {
			title: 'Flexible',
			subtitle: 'Flexible working to fit around your lifestyle',
			imgFile: null,
			imgUrl: ''
		},
		4: {
			title: 'socials',
			subtitle: 'Monthly offsite socials to encourage teambuilding',
			imgFile: null,
			imgUrl: ''
		},
		5: {
			title: 'GROWTH',
			subtitle: 'We send you on self-development courses',
			imgFile: null,
			imgUrl: ''
		},
		6: {
			title: 'BRUNCH',
			subtitle: 'Monthly bonding bunch with the whole team',
			imgFile: null,
			imgUrl: ''
		}
	},
	// why us
	companyTagline: 'We believe that #itscooltobekind',
	companyEthos: 'We are on a mission to create products that are 100% up-cycled, and we are 92% of the way there…! Our packaging is recycled and recyclable and the tags are made from 100% plantable paper. Simply plant, love and care for them, and watch them grow!',
	coreValues: [
		{
			title: 'WE LISTEN',
			subtitle: 'All of our #TeamTala family has a say in our products',
			description: 'We want them to be comfortable & empowered with expressing their opinions in the products.'
		},
		{
			title: 'WE care',
			subtitle: 'We’re a bunch of kind souls trying to save the world ',
			description: 'We’re all big characters who have their opinions but will always stay open-minded.'
		},
		{
			title: 'WE evolve',
			subtitle: 'The nature of our company means that we’re adaptive',
			description: 'As the clothing is made from recycled materials, we have to stay on our toes with creativity'
		}
	]
});

export default state;
