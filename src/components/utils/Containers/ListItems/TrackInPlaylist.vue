<template>
	<tr class="mt-5 mb-10 hover:bg-gray-800 duration-200 cursor-pointer">
		<td class="py-2 px-2" @click="selectTrack()">
			<img :src="item.album.cover" alt="" class="w-10 h-full mr-3" />
		</td>

		<td class="py-2 px-2" @click="selectTrack()">
			<P class="font-bold">{{ item.title }}</P>
		</td>

		<td class="py-2 px-2 hover:underline" v-if="item.artist">
			<RouterLink
				:to="{ name: 'ArtistPage', params: { artist_id: item.artist.id } }"
				>{{ item.artist.name }}</RouterLink
			>
		</td>

		<td class="py-2 px-2 hover:underline" @click="selectTrack()">
			<RouterLink
				:to="{ name: 'AlbumPage', params: { album_id: item.album.id } }"
				>{{ item.album.title }}</RouterLink
			>
		</td>

		<td class="py-2 px-2" @click="selectTrack()">
			<P class="font-bold">{{ this.formatUnixToDate(item.time_add) }}</P>
		</td>

		<td class="py-2 px-2" @click="selectTrack()">
			<P class="font-bold">{{ this.formatTrackDuration(item.duration) }}</P>
		</td>
	</tr>
</template>

<script>
import P from "@/components/utils/html/P.vue";
import formatTrackDuration from "@/mixins/General/Numbers/formatTrackDuration.js";
import formatUnixToDate from "@/mixins/General/Numbers/formatUnixToDate.js";
export default {
	props: {
		item: Object,
	},
	mixins: [formatTrackDuration, formatUnixToDate],
	components: {
		P,
	},
	methods: {
		selectTrack() {
			this.emitter.emit("trackSelected", this.item);
		},
	},
};
</script>

<style></style>
