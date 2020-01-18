const state = () => ({
	isEditing: true, 
	id: null,
	companyName: null,
	quickPitch: null,
	currentProfileCreationStep: 1,
	role: 'employer',
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
