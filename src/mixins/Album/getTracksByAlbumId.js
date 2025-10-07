export default {
	methods: {
		getTracksByAlbumId(id) {
			return new Promise((resolve, reject) => {
				window.DZ.api(`/album/${id}/tracks`, (response) => {
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
