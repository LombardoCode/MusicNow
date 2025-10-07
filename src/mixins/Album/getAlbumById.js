export default {
	methods: {
		getAlbumById(id) {
			return new Promise((resolve, reject) => {
				window.DZ.api(`/album/${id}`, (response) => {
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
