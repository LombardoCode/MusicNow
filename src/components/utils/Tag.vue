<template>
	<router-link
		class="inline-block bg-red-500 hover:bg-red-600 duration-200 text-white py-1 px-5 rounded-full cursor-pointer mr-3 font-bold mb-3"
		:to="{ name: name }"
	>
		<slot></slot>
	</router-link>
</template>

<script>
export default {
	props: {
		name: String,
	},
};
</script>

<style></style>
