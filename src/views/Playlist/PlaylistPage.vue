<template>
	<div>
		<Loading :loading="loading" />
		<Container v-if="!loading && found">
			<div id="picture-name-fans" class="flex items-center">
				<div id="picture">
					<img
						:src="playlist.info.picture"
						:alt="playlist.info.title"
						class="rounded-full"
					/>
				</div>
				<div id="name-fans" class="ml-8">
					<H1 class="mb-2">{{ playlist.info.title }}</H1>
					<PSmall
						>Fans:
						{{ this.formatNumberToThousands(playlist.info.fans) }}</PSmall
					>
				</div>
			</div>
			<div id="tracks" class="my-10">
				<H3>Canciones</H3>
				<TracksContainerFromPlaylist>
					<TrackInPlaylist
						v-for="(item, index) in playlist.tracks"
						:key="index"
						:item="item"
					/>
				</TracksContainerFromPlaylist>
			</div>
		</Container>
	</div>
</template>

<script>
import getPlaylistById from "@/mixins/Playlist/getPlaylistById.js";
import getTracksByPlaylistId from "@/mixins/Playlist/getTracksByPlaylistId.js";
import formatNumberToThousands from "@/mixins/General/Numbers/formatNumberToThousands.js";
import Loading from "@/components/utils/UI/Loading.vue";
import Container from "@/components/utils/Containers/Container.vue";
import TracksContainerFromPlaylist from "@/components/utils/Containers/Tables/TracksContainerFromPlaylist.vue";
import TrackInPlaylist from "@/components/utils/Containers/ListItems/TrackInPlaylist.vue";
import H1 from "@/components/utils/html/H1.vue";
import H3 from "@/components/utils/html/H3.vue";
import PSmall from "@/components/utils/html/PSmall.vue";
export default {
	mixins: [getPlaylistById, getTracksByPlaylistId, formatNumberToThousands],
	components: {
		Loading,
		Container,
		TracksContainerFromPlaylist,
		TrackInPlaylist,
		H1,
		H3,
		PSmall,
	},
	mounted() {
		this.getPlaylistInfo(this.baseUrl, this.$route.params.playlist_id);
	},
	data() {
		return {
			loading: true,
			found: true,
			baseUrl: process.env.VUE_APP_CLIENT,
			playlist: {
				info: {},
				tracks: [],
			},
		};
	},
	methods: {
		async getPlaylistInfo(baseUrl, playlist_id) {
			const data = await this.getPlaylistById(baseUrl, playlist_id);
			if (!data) {
				this.found = false;
			} else {
				this.playlist.info = await data;
				this.found = true;
				this.loading = false;
				this.getTracksFromPlaylist(baseUrl, playlist_id);
			}
		},
		async getTracksFromPlaylist(baseUrl, playlist_id) {
			const data = await this.getTracksByPlaylistId(baseUrl, playlist_id);
			if (!data) {
				this.found = false;
			} else {
				this.found = true;
				this.loading = false;
				this.playlist.tracks = await data;
			}
		},
	},
};
</script>

<style></style>
