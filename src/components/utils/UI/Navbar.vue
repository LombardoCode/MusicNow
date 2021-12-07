<template>
	<div class="w-full bg-black text-white">
		<div class="container mx-auto flex justify-between items-center py-3">
			<div>
				<Link to="/" txt="MusicNow" />
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/" txt="Inicio" />
					</li>
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
