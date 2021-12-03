<template>
	<div v-if="!found">
		<h1 class="text-center text-white text-3xl">
			No hay resultados para "{{ query }}"
		</h1>
	</div>
</template>

<script>
export default {
	props: {
		found: {
			type: Boolean,
			required: true,
		},
		query: {
			type: String,
			required: true,
		},
	},
};
</script>

<style></style>
