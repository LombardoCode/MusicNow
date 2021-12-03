<template>
	<div v-if="loading">
		<h1 class="text-center text-white text-3xl">Espere un momento...</h1>
	</div>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			required: true,
		},
	},
};
</script>

<style></style>
