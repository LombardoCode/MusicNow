export default {
	methods: {
		formatUnixToDate(unix_timestamp) {
			const milliseconds = unix_timestamp * 1000;
			const dateObject = new Date(milliseconds);
			const humanDateFormat = dateObject.toLocaleDateString();
			return humanDateFormat;
		},
	},
};
