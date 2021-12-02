<template>
	<div>
		<Container>
			<PlaylistsContainer :playlists="playlists"></PlaylistsContainer>
		</Container>
	</div>
</template>

<script>
import axios from "axios";
import Container from "@/components/utils/Container.vue";
import PlaylistsContainer from "@/components/utils/Playlists/PlaylistsContainer.vue";
export default {
	components: {
		Container,
		PlaylistsContainer,
	},
	mounted() {
		this.search();
	},
	data() {
		return {
			baseUrl: process.env.VUE_APP_CLIENT,
			search_query: this.$route.params.search_query,
			playlists: [],
		};
	},
	methods: {
		async search() {
			if (this.$route.params.search_query != this.search_query) {
				this.$router.push({
					name: "Search",
					params: {
						search_query: this.search_query,
					},
				});
			}
			await axios
				.get(this.baseUrl + "/search/playlist?q=" + this.search_query)
				.then((res) => {
					this.playlists = res.data.data;
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style></style>
