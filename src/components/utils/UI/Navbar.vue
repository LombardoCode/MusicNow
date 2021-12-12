<template>
	<Container>
		<div class="w-full text-white mb-2">
			<div class="flex flex-col md:flex-row justify-between md:items-center">
				<div class="flex justify-between items-center">
					<div>
						<Logo />
					</div>
					<div id="toggle-menu" class="md:hidden px-4 py-2 rounded-md border-2 border-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer select-none" @click="menuToggled = !menuToggled">
						<i class="fas fa-bars"></i>
					</div>
				</div>
				<nav id="navbar" class="md:block" :class="{'h-0 collapseClosed': !menuToggled, 'h-full collapseOpened block': menuToggled}">
					<ul class="flex flex-col md:flex-row">
						<li><Link to="/" txt="Inicio" /></li>
						<li><Link to="/about" txt="Acerca de" /></li>
					</ul>
				</nav>
			</div>
		</div>
	</Container>
</template>

<script>
import Container from "@/components/utils/Containers/Container.vue";
import Link from "@/components/utils/UI/Link.vue";
import Logo from "@/components/utils/UI/Logo.vue";
export default {
	components: {
		Container,
		Link,
		Logo,
	},
	data() {
		return {
			menuToggled: false,
		};
	},
};
</script>

<style lang="scss" scoped>
	/*
		*/
	#navbar {
		transition: transform 0.16s ease-out;
		transform-origin: top;
	}

	.collapseClosed {
		transform: scaleY(0);
	}

	.collapseOpened {
		transform: scaleY(1);
	}
</style>
