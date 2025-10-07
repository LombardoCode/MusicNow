export default {
	methods: {
		getArtistsAlbumsByArtistsId(id) {
			return new Promise((resolve, reject) => {
				window.DZ.api(`/artist/${id}/albums`, (response) => {
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
