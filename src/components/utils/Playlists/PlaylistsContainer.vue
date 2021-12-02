<template>
	<div
		v-if="playlists.length > 0"
		class="tracks-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-white mt-4"
	>
		<PlaylistInList
			v-for="(playlist, index) in playlists"
			:key="index"
			:playlist="playlist"
		></PlaylistInList>
		<slot></slot>
	</div>
</template>

<script>
import PlaylistInList from "@/components/utils/Playlists/PlaylistInList.vue";
export default {
	props: {
		playlists: Array,
	},
	components: {
		PlaylistInList,
	},
};
</script>

<style></style>
