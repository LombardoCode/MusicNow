<template>
	<div
		class="mt-5 mb-10 hover:bg-gray-800 duration-200 cursor-pointer py-2"
		@click="selectPlaylist()"
	>
		<div class="py-2 px-5">
			<img :src="item.picture_medium" alt="" class="w-full rounded-xl" />
		</div>
		<div class="px-5">
			<P>{{ item.title }}</P>
		</div>
		<div class="px-5">
			<PSmall>{{ item.nb_tracks }} canciones</PSmall>
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
		selectPlaylist() {
			this.$router.push({
				name: "PlaylistPage",
				params: { playlist_id: this.item.id },
			});
		},
	},
};
</script>

<style></style>
