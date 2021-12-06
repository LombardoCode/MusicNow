import axios from "axios";

export default {
	methods: {
		getAlbumById(base_url, id) {
			return axios
				.get(base_url + "/album/" + id)
				.then((res) => {
					return res.data;
				})
				.catch((err) => {
					return err;
				});
		},
	},
};
