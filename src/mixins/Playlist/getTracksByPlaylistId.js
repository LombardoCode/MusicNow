export default {
	methods: {
		getTracksByPlaylistId(id) {
			return new Promise((resolve, reject) => {
				window.DZ.api(`/playlist/${id}/tracks`, (response) => {
					if (response.data) {
						resolve(response.data);
					} else {
						reject(response.error);
					}
				});
			});
		},
	},
};
