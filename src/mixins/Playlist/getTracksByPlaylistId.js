import axios from "axios";

export default {
	methods: {
		getTracksByPlaylistId(base_url, id) {
			return axios
				.get(base_url + "/playlist/" + id + "/tracks")
				.then((res) => {
					return res.data.data;
				})
				.catch((err) => {
					return err;
				});
		},
	},
};
