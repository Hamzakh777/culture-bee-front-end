const state = () => ({
	id: 1,
	name: 'test test',
	role: 'job-seeker',
	accessToken: process.browser === true ? (localStorage.getItem('access_token') || null) : null
});

export default state;
