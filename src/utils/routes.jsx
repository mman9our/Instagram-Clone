import { lazy } from "react";

import Home from "../pages/Home/Home";
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Login = lazy(() => import("../pages/Login/Login"));
const Messages = lazy(() => import("../pages/Messages/Messages"));
const Explore = lazy(() => import("../pages/Explore/Explore"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
export const routeName = {
	Home: "Home",
	Login: "Login",
	Profile: "Profile",
	Messages: "Messages",
	Explore: "Explore",
	NotFound: "NotFound",
};

export const routes = [
	{
		path: "/",
		title: routeName.Home,
		component: <Home />,
	},
	{
		path: "/login",
		title: routeName.Login,
		component: <Login />,
	},
	{
		path: "/profile",
		title: routeName.Profile,
		component: <Profile />,
	},
	{
		path: "/messages",
		title: routeName.Messages,
		component: <Messages />,
	},
	{
		path: "/explore",
		title: routeName.Explore,
		component: <Explore />,
	},
	{
		path: "/404",
		title: routeName.NotFound,
		component: <NotFound />,
	},
];
