const state = () => ({
	id: 1,
	name: 'test test',
	role: 'employer',
	accessToken: process.browser === true ? (localStorage.getItem('access_token') || null) : null
});

export default state;
