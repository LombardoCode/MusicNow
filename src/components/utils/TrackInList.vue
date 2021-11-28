<template>
	<tr class="mt-5 mb-10 hover:bg-gray-800 duration-200 cursor-pointer">
		<td>
			<img :src="track.album.cover_xl" alt="" class="w-16 h-full mr-3" />
		</td>
		<td>
			<P class="font-bold">{{ track.title }}</P>
		</td>

		<td>
			<P>{{ track.artist.name }}</P>
		</td>

		<td>
			<P>{{ track.album.title }}</P>
		</td>

		<td>
			<audio controls class="w-full">
				<source :src="track.preview" type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
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
};
</script>

<style></style>
