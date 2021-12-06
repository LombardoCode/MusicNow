import axios from "axios";

export default {
	methods: {
		getArtistsAlbumsByArtistsId(base_url, id) {
			return axios
				.get(base_url + "/artist/" + id + "/albums")
				.then((res) => {
					return res.data.data;
				})
				.catch((err) => {
					return err;
				});
		},
	},
};
