const state = () => ({
	currentStep: 1,
	id: null,
	role: 'job-seeker', // employer - job-seeker
	email: '',
	industry: '',
	name: '',
	skills: [],
	profileImgUrl: '',
	accessToken: process.browser === true ? (localStorage.getItem('access_token') || null) : null,
	profileImgFile: null,
	companyName: ''
});

export default state;
