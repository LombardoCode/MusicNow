<template>
	<Container>
		<H1 class="text-center mt-5">¿Qué vamos a escuchar hoy?</H1>
		<form
			class="flex flex-col md:flex-row md:justify-center text-center mt-6"
			@submit.prevent="searchResults()"
		>
			<Input
				type="text"
				name="query_text"
				placeholder="Búsqueda de canciones"
				v-model="search_query"
			/>
			<Button class="mt-2 md:mt-0 md:ml-2" txt="Buscar"></Button>
		</form>
	</Container>
</template>

<script>
import Container from "@/components/utils/Containers/Container.vue";
import H1 from "@/components/utils/html/H1.vue";
import Input from "@/components/utils/html/Input.vue";
import Button from "@/components/utils/html/Button.vue";
export default {
	name: "Home",
	components: {
		Container,
		H1,
		Input,
		Button,
	},
	data() {
		return {
			baseUrl: process.env.VUE_APP_CLIENT,
			search_query: "",
			tracks: [],
		};
	},
	methods: {
		async searchResults() {
			this.$router.push({
				name: "SearchSong",
				params: {
					search_query: this.search_query,
				},
			});
		},
	},
};
</script>
