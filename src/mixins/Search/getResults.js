export default {
	methods: {
		getResults(type, search_query) {
			return new Promise((resolve, reject) => {
				window.DZ.api(`/search/${type}?q=${search_query}`, (response) => {
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
