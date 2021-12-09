import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home/Home.vue";
import SearchGroup from "@/components/utils/UI/SearchGroup.vue";
import SearchSong from "@/views/Searches/Search.vue";
import SearchPlaylist from "@/views/Searches/Playlists.vue";
import SearchAlbum from "@/views/Searches/Albums.vue";
import SearchArtist from "@/views/Searches/Artists.vue";
import PlaylistPage from "@/views/Playlist/PlaylistPage.vue";
import AlbumPage from "@/views/Album/AlbumPage.vue";
import ArtistPage from "@/views/Artist/ArtistPage.vue";
import AboutPage from "@/views/About/AboutPage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/search/:search_query",
		name: "Search",
		props: true,
		component: SearchGroup,
		children: [
			{
				path: "",
				name: "SearchSong",
				component: SearchSong,
			},
			{
				path: "playlist",
				name: "SearchPlaylist",
				props: true,
				component: SearchPlaylist,
			},
			{
				path: "album",
				name: "SearchAlbum",
				component: SearchAlbum,
			},
			{
				path: "artist",
				name: "SearchArtist",
				component: SearchArtist,
			},
		],
	},
	{
		path: "/playlist/:playlist_id",
		name: "PlaylistPage",
		component: PlaylistPage,
	},
	{
		path: "/album/:album_id",
		name: "AlbumPage",
		component: AlbumPage,
	},
	{
		path: "/artist/:artist_id",
		name: "ArtistPage",
		component: ArtistPage,
	},
	{
		path: "/about",
		name: "AboutPage",
		component: AboutPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
