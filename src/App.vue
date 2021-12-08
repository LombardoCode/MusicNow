<template>
	<div>
		<Navbar />
		<router-view />
		<Player />
	</div>
</template>

<script>
import Navbar from "@/components/utils/UI/Navbar.vue";
import Player from "@/components/utils/UI/Player.vue";
export default {
	name: "App",
	components: {
		Navbar,
		Player,
	},
};
</script>

<style></style>
