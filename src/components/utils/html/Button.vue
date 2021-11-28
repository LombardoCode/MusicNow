<template>
	<button
		class="bg-blue-600 text-white px-8 py-2 border-2 border-blue-600 hover:bg-blue-800 duration-200 hover:border-blue-800"
	>
		{{ txt }}
	</button>
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

<style></style>
