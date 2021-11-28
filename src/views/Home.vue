<template>
	<Container>
		<H1 txt="¿Qué vamos a escuchar hoy?" class="text-center mt-5"></H1>
		<div class="flex flex-col md:flex-row md:justify-center text-center mt-6">
			<Input
				type="text"
				name="query_text"
				placeholder="Búsqueda de canciones"
				v-on:keyup.enter="search()"
				v-model="search_query"
			/>
			<Button
				class="mt-2 md:mt-0 md:ml-2"
				txt="Buscar"
				@click="search()"
			></Button>
		</div>

		<div v-if="tracks.length > 0">
			<TracksContainer :tracks="tracks"></TracksContainer>
		</div>
	</Container>
</template>

<script>
import axios from "axios";
import Container from "@/components/utils/Container.vue";
import H1 from "@/components/utils/html/H1.vue";
import Input from "@/components/utils/html/Input.vue";
import Button from "@/components/utils/html/Button.vue";
import TrackInList from "@/components/utils/TrackInList.vue";
import TracksContainer from "@/components/utils/TracksContainer.vue";
export default {
	name: "Home",
	components: {
		Container,
		H1,
		Input,
		Button,
		TrackInList,
		TracksContainer,
	},
	data() {
		return {
			baseUrl: process.env.VUE_APP_CLIENT,
			search_query: "",
			tracks: [],
		};
	},
	methods: {
		async search() {
			this.tracks = [];
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
