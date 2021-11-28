<template>
	<div class="tracks-container text-white">
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Canción</th>
					<th>Artista</th>
					<th>Album</th>
					<th>Player</th>
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
