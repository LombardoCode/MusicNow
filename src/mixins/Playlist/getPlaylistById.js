import axios from "axios";

export default {
	methods: {
		getPlaylistById(base_url, id) {
			return axios
				.get(base_url + "/playlist/" + id)
				.then((res) => {
					return res.data;
				})
				.catch((err) => {
					return err;
				});
		},
	},
};
