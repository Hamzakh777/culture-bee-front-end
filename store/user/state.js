const state = () => ({
	id: 1,
	name: 'test test',
	role: 'employer',
	location: '',
	companyName: '',
	industry: '',
	profileImgUrl: null,
	profileImgFile: null,
	accessToken: process.browser === true ? (localStorage.getItem('access_token') || null) : null
});

export default state;
