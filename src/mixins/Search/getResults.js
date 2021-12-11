import axios from "axios";

export default {
	methods: {
		getResults(type, search_query) {
			const url = process.env.VUE_APP_SERVER_URL + "/search/" + type + "?q=" + search_query
			const options = {
				headers: {
					'x-rapidapi-host': process.env.VUE_APP_X_RAPIDAPI_HOST,
					'x-rapidapi-key': process.env.VUE_APP_X_RAPIDAPI_KEY
				}
			};
			return axios
				.get(url, options)
				.then((res) => {
					return res.data.data;
				})
				.catch((err) => {
					return err;
				});
		},
	},
};
