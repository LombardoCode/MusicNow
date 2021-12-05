<template>
	<div v-if="data_to_grid.length > 0">
		<GridContainer v-if="data_to_grid[0].type != 'track'">
			<div v-for="(data, index) in data_to_grid" :key="index" :item="data">
				<PlaylistGridItem
					v-if="data.type == 'playlist'"
					:item="data"
				></PlaylistGridItem>
				<AlbumGridItem v-if="data.type == 'album'" :item="data"></AlbumGridItem>
				<ArtistGridItem
					v-if="data.type == 'artist'"
					:item="data"
				></ArtistGridItem>
				<PodcastGridItem
					v-if="data.type == 'podcast'"
					:item="data"
				></PodcastGridItem>
				<UserGridItem v-if="data.type == 'user'" :item="data"></UserGridItem>
			</div>
		</GridContainer>
		<div v-else>
			<TracksContainer v-if="data_to_grid[0].type == 'track'">
				<TrackListItem
					v-for="(data, index) in data_to_grid"
					:key="index"
					:item="data"
				></TrackListItem>
			</TracksContainer>
		</div>
		<slot></slot>
	</div>
</template>

<script>
import GridContainer from "@/components/utils/Containers/GridContainer.vue";
import TracksContainer from "@/components/utils/Containers/TracksContainer.vue";
import TrackListItem from "@/components/utils/Containers/ListItems/Track.vue";
import PlaylistGridItem from "@/components/utils/Containers/GridItems/Playlist.vue";
import AlbumGridItem from "@/components/utils/Containers/GridItems/Album.vue";
import ArtistGridItem from "@/components/utils/Containers/GridItems/Artist.vue";
import PodcastGridItem from "@/components/utils/Containers/GridItems/Podcast.vue";
import UserGridItem from "@/components/utils/Containers/GridItems/User.vue";
export default {
	props: {
		data_to_grid: Array,
	},
	components: {
		GridContainer,
		TracksContainer,
		TrackListItem,
		PlaylistGridItem,
		AlbumGridItem,
		ArtistGridItem,
		PodcastGridItem,
		UserGridItem,
	},
};
</script>

<style></style>
