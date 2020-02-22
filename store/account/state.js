const state = () => ({
	currentStep: 1,
	id: null,
	companyName: null,
	quickPitch: null,
	currentProfileCreationStep: 1,
	role: '', // employer - job-seeker
	email: '',
	industry: '',
	name: '',
	skills: [],
	profileImgUrl: null,
	coverImgUrl: null,
	accessToken: process.browser === true ? (localStorage.getItem('access_token') || null) : null,
	profileImgFile: null,
	redirectUrlOnAuth: ''
});

export default state;
