<template>
	<div>
		<Container>
			<Loading :loading="loading" />
			<NotFound :found="found" :query="search_query" />
			<SearchResults :data_to_grid="albums"></SearchResults>
		</Container>
	</div>
</template>

<script>
import Container from "@/components/utils/Container.vue";
import Loading from "@/components/utils/UI/Loading.vue";
import NotFound from "@/components/utils/UI/NotFound.vue";
import SearchResults from "@/components/utils/Containers/SearchResults.vue";
import getResults from "@/mixins/getResults.js";
export default {
	components: {
		Container,
		Loading,
		NotFound,
		SearchResults,
	},
	mixins: [getResults],
	mounted() {
		this.search();

		this.emitter.on("search", (search_query) => {
			this.$router.push({
				name: "SearchAlbum",
				params: {
					search_query,
				},
			});
		});
	},
	data() {
		return {
			loading: true,
			found: true,
			baseUrl: process.env.VUE_APP_CLIENT,
			type: "album",
			search_query: this.$route.params.search_query,
			albums: [],
		};
	},
	methods: {
		async search(search_query = this.search_query) {
			this.loading = true;
			this.found = true;
			this.albums = await this.getResults(
				this.baseUrl,
				this.type,
				search_query
			);
			this.found = this.albums.length > 0 ? true : false;
			this.loading = false;
		},
	},
	watch: {
		"$route.params.search_query": function (search_query) {
			this.albums = [];
			this.search(search_query);
		},
	},
};
</script>

<style></style>
