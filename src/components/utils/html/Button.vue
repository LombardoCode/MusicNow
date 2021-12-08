<template>
	<button
		class="bg-red-500 text-white px-8 py-2 border-2 border-red-500 hover:bg-red-800 duration-200 hover:border-red-800"
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
