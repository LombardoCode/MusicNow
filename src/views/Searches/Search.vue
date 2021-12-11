<template>
	<div>
		<Container>
			<Loading :loading="loading" />
			<NotFound :found="found" :query="$route.params.search_query" />
			<SearchResults :data_to_grid="tracks"></SearchResults>
		</Container>
	</div>
</template>

<script>
import Container from "@/components/utils/Containers/Container.vue";
import Loading from "@/components/utils/UI/Loading.vue";
import NotFound from "@/components/utils/UI/NotFound.vue";
import SearchResults from "@/components/utils/UI/SearchResults.vue";
import getResults from "@/mixins/Search/getResults.js";
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
				name: "SearchSong",
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
			type: "track",
			search_query: this.$route.params.search_query,
			tracks: [],
		};
	},
	methods: {
		async search(search_query = this.search_query) {
			this.loading = true;
			this.found = true;
			this.tracks = await this.getResults(this.type, search_query);
			this.found = this.tracks.length > 0 ? true : false;
			this.loading = false;
		},
	},
	watch: {
		"$route.params.search_query": function (search_query) {
			this.tracks = [];
			this.search(search_query);
		},
	},
};
</script>

<style></style>
