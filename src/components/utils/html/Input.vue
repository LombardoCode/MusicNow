<template>
	<input
		:type="type"
		:name="name"
		:id="id"
		:placeholder="placeholder"
		class="w-full md:w-3/4 lg:w-3/4 border-2 border-blue-500 px-4 py-2 outline-none focus:border-blue-700 duration-200 placeholder-gray-400 text-gray-800"
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
};
</script>

<style></style>
