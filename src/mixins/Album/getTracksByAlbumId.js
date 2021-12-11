import axios from "axios";

export default {
	methods: {
		getTracksByAlbumId(id) {
			const url = process.env.VUE_APP_SERVER_URL + "/album/" + id + "/tracks"
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
