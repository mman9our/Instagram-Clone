import Sidenav from "../components/navigation/Sidenav";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
	return (
		<div className="layout">
			<Sidenav />
			<Outlet />
		</div>
	);
};

export default Layout;
