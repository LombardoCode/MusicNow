<template>
	<div class="tracks-container text-white mt-4">
		<table class="w-full">
			<thead>
				<tr>
					<th class="py-2"></th>
					<th class="py-2">Canción</th>
					<th class="py-2">Artista</th>
					<th class="py-2">Album</th>
				</tr>
			</thead>
			<tbody>
				<TrackInList
					v-for="(track, index) in tracks"
					:key="index"
					:track="track"
				></TrackInList>
			</tbody>
		</table>
		<slot></slot>
	</div>
</template>

<script>
import TrackInList from "@/components/utils/TrackInList.vue";
export default {
	props: {
		tracks: Array,
	},
	components: {
		TrackInList,
	},
};
</script>

<style></style>
