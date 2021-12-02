<template>
	<div
		v-if="data_to_grid.length > 0"
		class="tracks-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-white mt-4"
	>
		<div v-for="(data, index) in data_to_grid" :key="index" :item="data">
			<div v-if="data.type == 'playlist'">
				<PlaylistGridItem :item="data"></PlaylistGridItem>
			</div>
			<div v-if="data.type == 'album'">
				<AlbumGridItem :item="data"></AlbumGridItem>
			</div>
			<div v-if="data.type == 'artist'">
				<ArtistGridItem :item="data"></ArtistGridItem>
			</div>
			<div v-if="data.type == 'podcast'">
				<PodcastGridItem :item="data"></PodcastGridItem>
			</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
import PlaylistGridItem from "@/components/utils/Containers/GridItems/Playlist.vue";
import AlbumGridItem from "@/components/utils/Containers/GridItems/Album.vue";
import ArtistGridItem from "@/components/utils/Containers/GridItems/Artist.vue";
import PodcastGridItem from "@/components/utils/Containers/GridItems/Podcast.vue";
export default {
	mounted() {
		console.log(this.data_to_grid);
	},
	props: {
		data_to_grid: Array,
	},
	components: {
		PlaylistGridItem,
		AlbumGridItem,
		ArtistGridItem,
		PodcastGridItem,
	},
};
</script>

<style></style>
