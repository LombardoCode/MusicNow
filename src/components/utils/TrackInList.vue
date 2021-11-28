<template>
	<div class="mt-5 mb-10 flex flex-col items-center">
		<img :src="track.album.cover_xl" alt="" class="w-64" />
		<p>Artista: {{ track.artist.name }}</p>
		<p>Canción: {{ track.title }}</p>
		<p>MP3: {{ track.preview }}</p>

		<audio controls class="w-full">
			<source :src="track.preview" type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
	</div>
</template>

<script>
export default {
	props: {
		track: Object,
	},
};
</script>

<style></style>
