import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
	},
	{
		path: "/search/:search_query",
		name: "Search",
		component: () =>
			import(/* webpackChunkName: "search" */ "../components/utils/Router.vue"),
		children: [
			{
				path: "",
				name: "SearchSong",
				component: () =>
					import(
						/* webpackChunkName: "search" */ "../views/Searches/Search.vue"
					),
			},
			{
				path: "playlist",
				name: "SearchPlaylist",
				component: () =>
					import(
						/* webpackChunkName: "search" */ "../views/Searches/Playlists.vue"
					),
			},
			{
				path: "album",
				name: "SearchAlbum",
				component: () =>
					import(
						/* webpackChunkName: "search" */ "../views/Searches/Albums.vue"
					),
			},
			{
				path: "artist",
				name: "SearchArtist",
				component: () =>
					import(
						/* webpackChunkName: "search" */ "../views/Searches/Artists.vue"
					),
			},
			{
				path: "podcast",
				name: "SearchPodcast",
				component: () =>
					import(
						/* webpackChunkName: "search" */ "../views/Searches/Podcasts.vue"
					),
			},
			{
				path: "episode",
				name: "SearchEpisode",
				component: () =>
					import(
						/* webpackChunkName: "search" */ "../views/Searches/Search.vue"
					),
			},
			{
				path: "profile",
				name: "SearchProfile",
				component: () =>
					import(
						/* webpackChunkName: "search" */ "../views/Searches/Search.vue"
					),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
