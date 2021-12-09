<template>
	<tr class="mt-5 mb-10 hover:bg-gray-800 duration-200 cursor-pointer">
		<td class="py-2 px-2" @click="selectTrack()" v-if="item.album">
			<P class="font-bold">{{ key }}</P>
			<img :src="item.album.cover_xl" alt="" class="w-10 h-full mr-3" />
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

		<td class="py-2 px-2 hover:underline" v-if="item.album">
			<RouterLink
				:to="{ name: 'AlbumPage', params: { album_id: item.album.id } }"
				>{{ item.album.title }}</RouterLink
			>
		</td>

		<td class="py-2 px-2" @click="selectTrack()">
			<P class="font-bold">{{ this.formatTrackDuration(item.duration) }}</P>
		</td>
	</tr>
</template>

<script>
import formatTrackDuration from "@/mixins/General/Numbers/formatTrackDuration.js";
import P from "@/components/utils/html/P.vue";
export default {
	mixins: [formatTrackDuration],
	props: {
		item: Object,
		key: Number,
	},
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
