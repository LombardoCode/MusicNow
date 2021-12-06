import axios from "axios";

export default {
	methods: {
		getTracksByAlbumId(base_url, id) {
			return axios
				.get(base_url + "/album/" + id + "/tracks")
				.then((res) => {
					return res.data.data;
				})
				.catch((err) => {
					return err;
				});
		},
	},
};
