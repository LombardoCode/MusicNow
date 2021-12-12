<template>
	<router-link
		:to="to"
		class="inline-block w-full md:w-auto text-center md:text-left py-4 md:py-2 px-4 md:ml-2 my-3 md:my-0 md:mb-0 hover:bg-white hover:text-black rounded-full transition-all duration-200 cursor-pointer"
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
