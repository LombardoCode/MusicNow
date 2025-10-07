<template>
	<div class="tracks-container text-white mt-4 mb-44">
		<table class="w-full">
			<thead>
				<tr class="text-left">
					<th class="py-2"></th>
					<th class="py-2">Song</th>
					<th class="py-2">Artist</th>
					<th class="py-2">Album</th>
					<th class="py-2">Duration</th>
				</tr>
			</thead>
			<tbody>
				<slot></slot>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
