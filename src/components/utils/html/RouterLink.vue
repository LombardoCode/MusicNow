<template>
	<router-link :to="to.name" class="text-white text-base hover:underline"
		><slot></slot
	></router-link>
</template>

<script>
export default {
	props: {
		to: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style></style>
