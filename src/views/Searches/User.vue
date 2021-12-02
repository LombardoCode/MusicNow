<template>
	<div>
		<Container>
			<GridContainer :data_to_grid="artists"></GridContainer>
		</Container>
	</div>
</template>

<script>
import axios from "axios";
import Container from "@/components/utils/Container.vue";
import GridContainer from "@/components/utils/Containers/GridContainer.vue";
export default {
	components: {
		Container,
		GridContainer,
	},
	mounted() {
		this.search();
	},
	data() {
		return {
			baseUrl: process.env.VUE_APP_CLIENT,
			search_query: this.$route.params.search_query,
			artists: [],
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
				.get(this.baseUrl + "/search/user?q=" + this.search_query)
				.then((res) => {
					this.artists = res.data.data;
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
