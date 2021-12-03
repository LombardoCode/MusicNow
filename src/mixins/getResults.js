import axios from "axios";

export default {
	methods: {
		getResults(base_url, type, search_query) {
			return axios
				.get(base_url + "/search/" + type + "?q=" + search_query)
				.then((res) => {
					return res.data.data;
				})
				.catch((err) => {
					return err;
				});
		},
	},
};
