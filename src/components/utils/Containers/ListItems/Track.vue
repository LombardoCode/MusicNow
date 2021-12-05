<template>
	<tr class="mt-5 mb-10 hover:bg-gray-800 duration-200 cursor-pointer">
		<td class="py-2 px-2" @click="selectTrack()">
			<img :src="item.album.cover_xl" alt="" class="w-10 h-full mr-3" />
		</td>
		<td class="py-2 px-2" @click="selectTrack()">
			<P class="font-bold">{{ item.title }}</P>
		</td>

		<td class="py-2 px-2">
			<P>{{ item.artist.name }}</P>
		</td>

		<td class="py-2 px-2">
			<P>{{ item.album.title }}</P>
		</td>
	</tr>
</template>

<script>
import P from "@/components/utils/html/P.vue";
export default {
	props: {
		item: Object,
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
