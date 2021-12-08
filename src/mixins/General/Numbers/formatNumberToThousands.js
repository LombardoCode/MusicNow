export default {
	methods: {
		formatNumberToThousands(number) {
			const formatter = Intl.NumberFormat();
			return formatter.format(number);
		},
	},
};
