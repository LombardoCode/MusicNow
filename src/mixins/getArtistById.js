import axios from "axios";

export default {
	methods: {
		getArtistById(base_url, id) {
			return axios
				.get(base_url + "/artist/" + id)
				.then((res) => {
					return res.data;
				})
				.catch((err) => {
					return err;
				});
		},
	},
};
