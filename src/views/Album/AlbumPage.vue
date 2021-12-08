<template>
	<div>
		<Loading :loading="loading" />
		<Container v-if="!loading && found">
			<div id="picture-name-fans" class="flex items-center">
				<div id="picture">
					<img
						:src="album.info.cover"
						:alt="album.info.title"
						class="rounded-full"
					/>
				</div>
				<div id="name-fans" class="ml-8">
					<H1 class="mb-2">{{ album.info.title }}</H1>
					<PSmall
						>Fans: {{ this.formatNumberToThousands(album.info.fans) }}</PSmall
					>
				</div>
			</div>
			<div id="tracks" class="my-10">
				<H3>Canciones</H3>
				<TracksContainerFromAlbum>
					<TrackInAlbum
						v-for="(item, index) in album.tracks"
						:key="index"
						:item="item"
					/>
				</TracksContainerFromAlbum>
			</div>
		</Container>
	</div>
</template>

<script>
import getAlbumById from "@/mixins/Album/getAlbumById.js";
import getTracksByAlbumId from "@/mixins/Album/getTracksByAlbumId.js";
import formatNumberToThousands from "@/mixins/General/Numbers/formatNumberToThousands.js";
import Loading from "@/components/utils/UI/Loading.vue";
import Container from "@/components/utils/Containers/Container.vue";
import TracksContainerFromAlbum from "@/components/utils/Containers/Tables/TracksContainerFromAlbum.vue";
import TrackInAlbum from "@/components/utils/Containers/ListItems/TrackInAlbum.vue";
import H1 from "@/components/utils/html/H1.vue";
import H3 from "@/components/utils/html/H3.vue";
import PSmall from "@/components/utils/html/PSmall.vue";
export default {
	mixins: [getAlbumById, getTracksByAlbumId, formatNumberToThousands],
	components: {
		Loading,
		Container,
		TracksContainerFromAlbum,
		TrackInAlbum,
		H1,
		H3,
		PSmall,
	},
	mounted() {
		this.getAlbumInfo(this.baseUrl, this.$route.params.album_id);
	},
	data() {
		return {
			loading: true,
			found: true,
			baseUrl: process.env.VUE_APP_CLIENT,
			album: {
				info: {},
				tracks: [],
			},
		};
	},
	methods: {
		async getAlbumInfo(baseUrl, album_id) {
			const data = await this.getAlbumById(baseUrl, album_id);
			console.log(data);
			if (!data) {
				this.found = false;
			} else {
				this.album.info = await data;
				this.found = true;
				this.loading = false;
				this.getTracksFromAlbum(baseUrl, album_id);
			}
		},
		async getTracksFromAlbum(baseUrl, album_id) {
			const data = await this.getTracksByAlbumId(baseUrl, album_id);
			console.log(data);
			if (!data) {
				this.found = false;
			} else {
				this.found = true;
				this.loading = false;
				this.album.tracks = await data;
			}
		},
	},
};
</script>

<style></style>
