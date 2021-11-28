<template>
	<div class="w-full bg-black text-white">
		<div class="container mx-auto flex justify-between items-center py-2">
			<div
				class="py-1 px-3 hover:bg-white hover:text-black rounded-md transition-all duration-200 cursor-pointer"
			>
				<span>MusicNow!</span>
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
import Link from "@/components/utils/Link.vue";
export default {
	components: {
		Link,
	},
};
</script>

<style></style>
