import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () =>
			import(/* webpackChunkName: "Home" */ "../views/Home/Home.vue"),
	},
	{
		path: "/search/:search_query",
		name: "Search",
		props: true,
		component: () =>
			import(
				/* webpackChunkName: "Search" */ "../components/utils/UI/SearchGroup.vue"
			),
		children: [
			{
				path: "",
				name: "SearchSong",
				component: () =>
					import(
						/* webpackChunkName: "SearchSong" */ "../views/Searches/Search.vue"
					),
			},
			{
				path: "playlist",
				name: "SearchPlaylist",
				props: true,
				component: () =>
					import(
						/* webpackChunkName: "SearchPlaylist" */ "../views/Searches/Playlists.vue"
					),
			},
			{
				path: "album",
				name: "SearchAlbum",
				component: () =>
					import(
						/* webpackChunkName: "SearchAlbum" */ "../views/Searches/Albums.vue"
					),
			},
			{
				path: "artist",
				name: "SearchArtist",
				component: () =>
					import(
						/* webpackChunkN434ame: "SearchArtist" */ "../views/Searches/Artists.vue"
					),
			},
		],
	},
	{
		path: "/playlist/:playlist_id",
		name: "PlaylistPage",
		component: () =>
			import(
				/* webpackChunkName: "PlaylistPage" */ "../views/Playlist/PlaylistPage.vue"
			),
	},
	{
		path: "/album/:album_id",
		name: "AlbumPage",
		component: () =>
			import(
				/* webpackChunkName: "AlbumPage" */ "../views/Album/AlbumPage.vue"
			),
	},
	{
		path: "/artist/:artist_id",
		name: "ArtistPage",
		component: () =>
			import(
				/* webpackChunkName: "ArtistPage" */ "../views/Artist/ArtistPage.vue"
			),
	},
	{
		path: "/about",
		name: "AboutPage",
		component: () =>
			import(
				/* webpackChunkName: "AboutPage" */ "../views/About/AboutPage.vue"
			),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
