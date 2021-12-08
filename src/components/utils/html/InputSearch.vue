<template>
	<input
		:type="type"
		:name="name"
		:id="id"
		:placeholder="placeholder"
		class="w-full md:w-3/4 lg:w-3/4 border-2 focus:border-red-500 outline-none px-4 py-2 duration-200 placeholder-gray-400 text-gray-800 rounded-full"
		v-model="input_text"
	/>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: false,
		},
		id: {
			type: String,
			required: false,
		},
		placeholder: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			input_text: this.$route.params.search_query,
		};
	},
};
</script>

<style></style>
