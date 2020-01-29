const mutations = {
    setJobs(state, jobs) {
        state.jobs = jobs;
    },
    addJob(state, job) {
        state.jobs.push(job);
    }
};

export default mutations;
