import { Suspense } from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./pages/Loading/Loading";
import { routes } from "./utils/routes";
import "./App.css";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Layout />} errorElement={<NotFound />}>
				{routes.map((route, idx) => (
					<Route path={route.path} key={idx} element={route.component} />
				))}
			</Route>
		)
	);

	return (
		<Suspense fallback={<Loading />}>
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default App;
