const mutations = {
	setJob(state, job) {
		state.id = job.id;
		state.location = job.location;
		state.seniority = job.seniority;
		state.industry = job.industry;
		state.type = job.type;
		state.jobTitle = job.jobTitle;
		state.quickPitch = job.quickPitch;
		state.applicationUrl = job.applicationUrl;
		state.applicationEmail = job.applicationEmail;
		state.tags = job.tags;
		state.skills = job.skills;
		state.whyThisRole = job.whyThisRole;
		state.ownershipValues = job.ownershipValues;
		state.applicantQualities = job.applicantQualities;
		state.promoPhotoUrl = job.promoPhotoUrl;
		state.aboutTheColleagues = job.aboutTheColleagues;
		state.familyPhotoUrl = job.familyPhotoUrl;
		state.createdAt = job.createdAt;
		state.userId = job.userId;
	}
};

export default mutations;
