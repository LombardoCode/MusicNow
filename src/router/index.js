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
		props: true,
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
				props: true,
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
						/* webpackChunkN434ame: "search" */ "../views/Searches/Artists.vue"
					),
			},
			{
				path: "users",
				name: "SearchUser",
				component: () =>
					import(/* webpackChunkName: "search" */ "../views/Searches/User.vue"),
			},
		],
	},
	{
		path: "/playlist/:playlist_id",
		name: "PlaylistPage",
		component: () =>
			import(
				/* webpackChunkName: "search" */ "../views/Playlist/PlaylistPage.vue"
			),
	},
	{
		path: "/album/:album_id",
		name: "AlbumPage",
		component: () =>
			import(/* webpackChunkName: "search" */ "../views/Album/AlbumPage.vue"),
	},
	{
		path: "/artist/:artist_id",
		name: "ArtistPage",
		component: () =>
			import(/* webpackChunkName: "search" */ "../views/Artist/ArtistPage.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
