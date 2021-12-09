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

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
