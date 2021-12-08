<template>
	<div class="w-full text-white">
		<div class="container mx-auto flex justify-between items-center py-4">
			<div>
				<Link to="/" txt="MusicNow" />
			</div>
			<nav>
				<ul class="flex">
					<li><Link to="/acerca" txt="Acerca de" /></li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import Link from "@/components/utils/UI/Link.vue";
export default {
	components: {
		Link,
	},
};
</script>

<style></style>
