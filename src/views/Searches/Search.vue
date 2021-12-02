<template>
	<div>
		<Container>
			<TracksContainer :tracks="tracks"></TracksContainer>
		</Container>
	</div>
</template>

<script>
import axios from "axios";
import Container from "@/components/utils/Container.vue";
import TracksContainer from "@/components/utils/TracksContainer.vue";
export default {
	components: {
		Container,
		TracksContainer,
	},
	mounted() {
		this.search();
	},
	data() {
		return {
			baseUrl: process.env.VUE_APP_CLIENT,
			search_query: this.$route.params.search_query,
			tracks: [],
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
				.get(this.baseUrl + "/search?q=" + this.search_query)
				.then((res) => {
					this.tracks = res.data.data;
					console.log(this.tracks);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style></style>
