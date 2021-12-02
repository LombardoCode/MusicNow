<template>
	<div class="mt-5 mb-10 hover:bg-gray-800 duration-200 cursor-pointer py-2">
		<div class="py-2 px-5">
			<img :src="item.picture_xl" alt="" class="w-full rounded-full" />
		</div>
		<div class="px-5">
			<P>{{ item.name }}</P>
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
		formatNumber(amount) {
			const nf = Intl.NumberFormat();
			return nf.format(amount);
		},
	},
};
</script>

<style></style>
