import { useLocation } from "react-router-dom";
import Sidenav from "../components/navigation/Sidenav";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const isLoginOrSignup = location.pathname === "/auth";

  return (
    <div className={`${!isLoginOrSignup ? "layout" : "no-layout"}`}>
      {!isLoginOrSignup && <Sidenav />}
      <Outlet />
    </div>
  );
};

export default Layout;
