export default function ({ $axios, redirect }) {
	$axios.onError(error => {
		const code = parseInt(error.response && error.response.status);
		if (code === 401) {
			if (localStorage.getItem('access_token') !== null) {
				localStorage.removeItem('acces_token');
			}
			return redirect('/login');
		}
		if (code === 404) {
			return redirect('/404')
		}
	});
}
