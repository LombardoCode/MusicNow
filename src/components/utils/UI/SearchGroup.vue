<template>
	<div>
		<Container>
			<InputSearch
				type="text"
				name="query_text"
				placeholder="Search songs, playlists, albums and artists"
				v-on:keyup.enter="search()"
				v-model="search_query"
			/>
			<TagContainer>
				<Tag name="SearchSong">Songs</Tag>
				<Tag name="SearchPlaylist">Playlists</Tag>
				<Tag name="SearchAlbum">Albums</Tag>
				<Tag name="SearchArtist">Artists</Tag>
			</TagContainer>
		</Container>
		<router-view></router-view>
	</div>
</template>

<script>
import Container from "@/components/utils/Containers/Container.vue";
import InputSearch from "@/components/utils/html/InputSearch.vue";
import TagContainer from "@/components/utils/Containers/TagContainer.vue";
import Tag from "@/components/utils/UI/Tag.vue";
export default {
	components: {
		Container,
		InputSearch,
		TagContainer,
		Tag,
	},
	data() {
		return {
			search_query: this.$route.params.search_query,
		};
	},
	methods: {
		search() {
			this.emitter.emit("search", this.search_query);
		},
	},
};
</script>

<style></style>
