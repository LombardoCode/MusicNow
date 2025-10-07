export default {
	methods: {
		getPlaylistById(id) {
			return new Promise((resolve, reject) => {
				window.DZ.api(`/playlist/${id}`, (response) => {
					if (response.error) {
						reject(response.error);
					} else {
						resolve(response);
					}
				});
			});
		},
	},
};
