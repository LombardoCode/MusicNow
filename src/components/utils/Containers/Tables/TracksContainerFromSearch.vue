<template>
	<div class="tracks-container text-white mt-4">
		<table>
			<thead>
				<tr class="text-left">
					<th class="py-2"></th>
					<th class="py-2">Canción</th>
					<th class="py-2">Artista</th>
					<th class="py-2">Album</th>
					<th class="py-2">Duración</th>
				</tr>
			</thead>
			<tbody>
				<slot></slot>
			</tbody>
		</table>
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
