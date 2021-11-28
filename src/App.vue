<template>
	<div>
		<navbar></navbar>
		<router-view />
	</div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
	name: "App",
	components: {
		navbar,
	},
};
</script>

<style></style>
