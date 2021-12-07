<template>
	<div>
		<navbar></navbar>
		<router-view />
		<Player />
	</div>
</template>

<script>
import navbar from "@/components/utils/UI/Navbar.vue";
import Player from "@/components/utils/UI/Player.vue";
export default {
	name: "App",
	components: {
		navbar,
		Player,
	},
};
</script>

<style></style>
