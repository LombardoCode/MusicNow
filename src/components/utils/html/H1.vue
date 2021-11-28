<template>
	<h1 class="font-bold text-4xl">{{ txt }}</h1>
</template>

<script>
export default {
	props: {
		txt: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
h1 {
	font-family: "Roboto Condensed";
}
</style>
