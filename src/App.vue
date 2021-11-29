<template>
	<div>
		<navbar></navbar>
		<router-view />
		<Player />
	</div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
import Player from "@/components/utils/Player.vue";
export default {
	name: "App",
	components: {
		navbar,
		Player,
	},
};
</script>

<style></style>
