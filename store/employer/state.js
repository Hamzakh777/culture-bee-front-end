const state = () => ({
	isEditing: true, 
	id: null,
	companyName: null,
	quickPitch: null,
	role: 'employer',
	location: '',
	email: '',
	industry: '',
	name: '',
	skills: [],
	profileImgUrl: null,
	coverImgUrl: null,
	profileImgFile: null,
	following: false
});

export default state;
