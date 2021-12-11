import axios from "axios";

export default {
	methods: {
		getArtistById(id) {
			const url = process.env.VUE_APP_SERVER_URL + "/artist/" + id;
			const options = {
				headers: {
					'x-rapidapi-host': process.env.VUE_APP_X_RAPIDAPI_HOST,
					'x-rapidapi-key': process.env.VUE_APP_X_RAPIDAPI_KEY
				}
			};
			return axios
				.get(url, options)
				.then((res) => {
					return res.data;
				})
				.catch((err) => {
					return err;
				});
		},
	},
};
