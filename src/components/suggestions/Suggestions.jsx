import { Avatar } from "@mui/material";
import "./Suggestions.css";
import { Typography } from "@mui/material";

import {
  blueGrey,
  brown,
  cyan,
  deepOrange,
  green,
  pink,
} from "@mui/material/colors";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__username__header">
        <div className="username__left__header">
          <span className="avatar">
            <Avatar
              sx={{ bgcolor: blueGrey[500], width: 65, height: 65 }}
              src="src/assets/Avatars/boy.png"
            ></Avatar>
          </span>
          <div className="username__info">
            <span className="username">ibraahhemi</span>
            <span className="relation">Ibraheem Shawhnee </span>
          </div>
        </div>

        <button className="follow__button">Switch</button>
      </div>

      <div className="suggestions__header">
        <div className="suggestions__title">Suggestions for you</div>
        <div className="suggestions__see__more">See more</div>
      </div>

      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar
                sx={{ bgcolor: green[500], fontSize: "17px" }}
                src="src/assets/Avatars/steward.png"
              ></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Ward Daraghmeh</span>
              <span className="relation">Followed by moath</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar
                sx={{ bgcolor: brown[500], fontSize: "17px" }}
                src="src/assets/Avatars/singer.png"
              ></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Batool Azzam</span>
              <span className="relation">Followed by anwar</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar
                sx={{ bgcolor: cyan[500], fontSize: "17px" }}
                src="src/assets/Avatars/cock-man.png"
              ></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Omar Yasin</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar
                sx={{ bgcolor: pink[500], fontSize: "17px" }}
                src="src/assets/Avatars/nurse.png"
              ></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Anwar Ghannam</span>
              <span className="relation">Followed by hala</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar
                sx={{ bgcolor: deepOrange[500], fontSize: "17px" }}
                src="src/assets/Avatars/shop-assistant.png"
              ></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Jenan Kmail</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
      <Typography
        sx={{ color: "grey" }}
        variant="caption"
        display="block"
        gutterBottom
        mt={6}
      >
        About . Help . Press . API . Jobs . Privacy . Terms .<br></br> Locations
        . Language . Meta Verified
      </Typography>

      <Typography
        sx={{ color: "grey" }}
        variant="caption"
        display="block"
        gutterBottom
        mt={3}
      >
        © 2023 INSTAGRAM FROM META
      </Typography>
    </div>
  );
}

export default Suggestions;
