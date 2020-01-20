const state = () => ({
	currentStep: 4,
	id: null,
	companyName: null,
	quickPitch: null,
	currentProfileCreationStep: 1,
	role: 'job-seeker', // employer - job-seeker
	email: '',
	industry: '',
	name: '',
	skills: [],
	profileImgUrl: null,
	coverImgUrl: null,
	accessToken: process.browser === true ? (localStorage.getItem('access_token') || null) : null,
	profileImgFile: null
});

export default state;
