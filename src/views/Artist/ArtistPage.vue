<template>
	<Container v-if="found">
		<div id="picture-name-fans" class="flex items-center">
			<div id="picture">
				<img
					:src="artist.info.picture"
					:alt="artist.info.name + ' profile picture'"
					class="rounded-full"
				/>
			</div>
			<div id="name-fans" class="ml-8">
				<H1 class="mb-2">{{ artist.info.name }}</H1>
				<PSmall
					>Fans: {{ this.formatNumberToThousands(artist.info.nb_fan) }}</PSmall
				>
			</div>
		</div>
		<div id="albums" class="my-10">
			<H3>Albums</H3>
			<GridContainer>
				<GridItemAlbum
					v-for="(item, index) in artist.albums"
					:key="index"
					:item="item"
				/>
			</GridContainer>
		</div>
	</Container>
</template>

<script>
import getArtistById from "@/mixins/Artist/getArtistById.js";
import getArtistsAlbumsByArtistsId from "@/mixins/Artist/getArtistsAlbumsByArtistsId.js";
import formatNumberToThousands from "@/mixins/General/Numbers/formatNumberToThousands.js";
import Container from "@/components/utils/Containers/Container.vue";
import GridContainer from "@/components/utils/Containers/GridContainer.vue";
import GridItemAlbum from "@/components/utils/Containers/GridItems/Album.vue";
import H1 from "@/components/utils/html/H1.vue";
import H3 from "@/components/utils/html/H3.vue";
import PSmall from "@/components/utils/html/PSmall.vue";
export default {
	mixins: [getArtistById, getArtistsAlbumsByArtistsId, formatNumberToThousands],
	components: {
		Container,
		GridContainer,
		GridItemAlbum,
		H1,
		H3,
		PSmall,
	},
	mounted() {
		this.getArtistInfo(this.$route.params.artist_id);
	},
	data() {
		return {
			loading: true,
			found: true,
			artist: {
				info: {},
				albums: {},
			},
		};
	},
	methods: {
		async getArtistInfo(artist_id) {
			const data = await this.getArtistById(artist_id);
			if (!data) {
				this.found = false;
			} else {
				this.artist.info = data;
				this.getArtistsAlbums(artist_id);
			}
		},
		async getArtistsAlbums(artist_id) {
			const data = await this.getArtistsAlbumsByArtistsId(artist_id);
			if (!data) {
				this.found = false;
			} else {
				this.artist.albums = data;
			}
		},
	},
};
</script>

<style></style>
