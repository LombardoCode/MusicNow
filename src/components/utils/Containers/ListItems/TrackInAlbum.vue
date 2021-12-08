<template>
	<tr class="mt-5 mb-10 hover:bg-gray-800 duration-200 cursor-pointer">
		<td class="py-2 px-2" @click="selectTrack()">
			<P class="font-bold">{{ item.title }}</P>
		</td>

		<td class="py-2 px-2 hover:underline" v-if="item.artist">
			<RouterLink
				:to="{ name: 'ArtistPage', params: { artist_id: item.artist.id } }"
				>{{ item.artist.name }}</RouterLink
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
	props: {
		item: Object,
	},
	mixins: [formatTrackDuration],
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
