import { useState } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

function Sidenav() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const isButtonSelected = (buttonName) => {
    return selectedButton === buttonName ? "bold" : "normal";
  };

  return (
    <div className="sidenav">
      <Link to="/">
        <img
          className="sidenav__logo"
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="Instagram Logo"
        />
      </Link>

      <div className="sidenav__buttons">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            className="sidenav__button"
            style={{ fontWeight: isButtonSelected("Home") }}
            onClick={() => handleButtonClick("Home")}
          >
            <HomeIcon />
            <span>Home</span>
          </button>
        </Link>
        <Link to="/inprogress" style={{ textDecoration: "none" }}>
          <button
            className="sidenav__button"
            style={{ fontWeight: isButtonSelected("Search") }}
            onClick={() => handleButtonClick("Search")}
          >
            <SearchIcon />
            <span>Search</span>
          </button>
        </Link>

        <Link to="/explore" style={{ textDecoration: "none" }}>
          <button
            className="sidenav__button"
            style={{ fontWeight: isButtonSelected("Explore") }}
            onClick={() => handleButtonClick("Explore")}
          >
            <ExploreIcon />
            <span>Explore</span>
          </button>
        </Link>
        <Link to="/inprogress" style={{ textDecoration: "none" }}>
          <button
            className="sidenav__button"
            style={{ fontWeight: isButtonSelected("Reels") }}
            onClick={() => handleButtonClick("Reels")}
          >
            <SlideshowIcon />
            <span>Reels</span>
          </button>
        </Link>

        <Link to="/messages" style={{ textDecoration: "none" }}>
          <button
            className="sidenav__button"
            style={{ fontWeight: isButtonSelected("Messages") }}
            onClick={() => handleButtonClick("Messages")}
          >
            <ChatIcon />
            <span>Messages</span>
          </button>
        </Link>
        <Link to="/inprogress" style={{ textDecoration: "none" }}>
          <button
            className="sidenav__button"
            style={{ fontWeight: isButtonSelected("Notifications") }}
            onClick={() => handleButtonClick("Notifications")}
          >
            <FavoriteBorderIcon />
            <span>Notifications</span>
          </button>
        </Link>
        <Link to="/inprogress" style={{ textDecoration: "none" }}>
          <button
            className="sidenav__button"
            style={{ fontWeight: isButtonSelected("Create") }}
            onClick={() => handleButtonClick("Create")}
          >
            <AddCircleOutlineIcon />
            <span>Create</span>
          </button>
        </Link>

        <Link to="/profile" style={{ textDecoration: "none" }}>
          <button className="sidenav__button">
            <Avatar
              src="src/assets/Avatars/man.png"
              sx={{ bgcolor: deepPurple[500], fontSize: "17px" }}
            ></Avatar>
            <span>Profile</span>
          </button>
        </Link>
      </div>

      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
