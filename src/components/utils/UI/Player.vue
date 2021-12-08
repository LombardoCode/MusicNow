<template>
	<div
		class="player fixed w-full h-24 text-white bottom-0 border-t-2 border-gray-600"
		v-if="trackSelected != null"
	>
		<div
			class="container mx-auto h-full flex flex-col justify-center items-center"
		>
			<P>{{ trackSelected.title }} - {{ trackSelected.artist.name }}</P>
			<audio controls class="w-full my-2">
				<source :src="trackSelected.preview" type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	</div>
</template>

<script>
import P from "@/components/utils/html/P.vue";
export default {
	components: {
		P,
	},
	mounted() {
		this.emitter.on("trackSelected", async (trackSelected) => {
			this.trackSelected = await null;
			this.trackSelected = await trackSelected;
			console.log(this.trackSelected);
		});
	},
	data() {
		return {
			trackSelected: null,
		};
	},
};
</script>

<style lang="scss" scoped>
.player {
	background-color: #1c1c24;
}
</style>
