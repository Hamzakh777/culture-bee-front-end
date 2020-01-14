const state = () => ({
	id: 1,
	name: 'test test',
	role: 'employer',
	location: 'S17, London',
	companyName: '',
	quickPitch: '',
	industry: '',
	profileImgUrl: null,
	profileImgFile: null,
	coverImgUrl: null,
	currentProfileCreationStep: 1,
	accessToken: process.browser === true ? (localStorage.getItem('access_token') || null) : null
});

export default state;
