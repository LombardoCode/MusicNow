<template>
	<router-link
		:to="to"
		class="py-2 px-4 hover:bg-white hover:text-black rounded-md transition-all duration-200 cursor-pointer"
	>
		{{ txt }}
	</router-link>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: true,
		},
		txt: {
			type: String,
			required: true,
		},
	},
};
</script>

<style></style>
