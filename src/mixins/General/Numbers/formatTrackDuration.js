export default {
	methods: {
		formatTrackDuration(duration) {
			const minutes = Math.floor(duration / 60);
			let secs = Math.floor(duration % 60);
			secs = secs < 10 ? "0" + secs : secs;
			return minutes + ":" + secs;
		},
	},
};
