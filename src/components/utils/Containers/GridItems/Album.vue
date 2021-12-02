<template>
	<div class="mt-5 mb-10 hover:bg-gray-800 duration-200 cursor-pointer py-2">
		<div class="py-2 px-5">
			<img :src="item.cover_xl" alt="" class="w-full rounded-xl" />
		</div>
		<div class="px-5">
			<P>{{ item.title }}</P>
		</div>
		<div class="px-5">
			<PSmall>De {{ item.artist.name }}</PSmall>
		</div>
	</div>
</template>

<script>
import P from "@/components/utils/html/P.vue";
import PSmall from "@/components/utils/html/PSmall.vue";
export default {
	props: {
		item: Object,
	},
	components: {
		P,
		PSmall,
	},
	methods: {
		selectTrack() {
			this.emitter.emit("trackSelected", this.track);
		},
	},
};
</script>

<style></style>
