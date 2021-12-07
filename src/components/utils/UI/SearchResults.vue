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
			<TracksContainerFromSearch v-if="data_to_grid[0].type == 'track'">
				<TrackInSearch
					v-for="(data, index) in data_to_grid"
					:key="index"
					:item="data"
				></TrackInSearch>
			</TracksContainerFromSearch>
		</div>
		<slot></slot>
	</div>
</template>

<script>
import GridContainer from "@/components/utils/Containers/GridContainer.vue";
import TracksContainerFromSearch from "@/components/utils/Containers/Tables/TracksContainerFromSearch.vue";
import TrackInSearch from "@/components/utils/Containers/ListItems/TrackInSearch.vue";
import PlaylistGridItem from "@/components/utils/Containers/GridItems/Playlist.vue";
import AlbumGridItem from "@/components/utils/Containers/GridItems/Album.vue";
import ArtistGridItem from "@/components/utils/Containers/GridItems/Artist.vue";
import UserGridItem from "@/components/utils/Containers/GridItems/User.vue";
export default {
	props: {
		data_to_grid: Array,
	},
	components: {
		GridContainer,
		TracksContainerFromSearch,
		TrackInSearch,
		PlaylistGridItem,
		AlbumGridItem,
		ArtistGridItem,
		UserGridItem,
	},
};
</script>

<style></style>
