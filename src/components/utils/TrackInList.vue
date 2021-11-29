<template>
	<tr class="mt-5 mb-10 hover:bg-gray-800 duration-200 cursor-pointer">
		<td class="py-2 px-2" @click="selectTrack()">
			<img :src="track.album.cover_xl" alt="" class="w-16 h-full mr-3" />
		</td>
		<td class="py-2 px-2" @click="selectTrack()">
			<P class="font-bold">{{ track.title }}</P>
		</td>

		<td class="py-2 px-2">
			<P>{{ track.artist.name }}</P>
		</td>

		<td class="py-2 px-2">
			<P>{{ track.album.title }}</P>
		</td>
	</tr>
</template>

<script>
import P from "@/components/utils/html/P.vue";
export default {
	props: {
		track: Object,
	},
	components: {
		P,
	},
	methods: {
		selectTrack() {
			this.emitter.emit("trackSelected", this.track);
		},
	},
};
</script>

<style></style>
