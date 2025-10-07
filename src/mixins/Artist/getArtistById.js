export default {
	methods: {
		getArtistById(id) {
			return new Promise((resolve, reject) => {
				window.DZ.api(`/artist/${id}`, (response) => {
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
