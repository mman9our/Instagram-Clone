import { Avatar } from "@mui/material";
import "./Suggestions.css";
import { Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import image1 from "../../assets/Avatars/steward.png";
import image2 from "../../assets/Avatars/singer.png";
import image3 from "../../assets/Avatars/cock-man.png";
import image4 from "../../assets/Avatars/nurse.png";
import image5 from "../../assets/Avatars/shop-assistant.png";
import image6 from "../../assets/Avatars/boy.png";

function Suggestions() {
  let suggestionsPersons = [
    {
      id: 1,
      userName: "Ward Daraghmeh",
      relation: "Followed by moath",
      profileImage: image1,
    },
    {
      id: 2,
      userName: "Batool Azzam",
      relation: "Followed by anwar",
      profileImage: image2,
    },
    {
      id: 3,
      userName: "Omar Yasin",
      relation: "New to Instagram",
      profileImage: image3,
    },
    {
      id: 4,
      userName: "Anwar Ghannam",
      relation: "Followed by hala",
      profileImage: image4,
    },
    {
      id: 5,
      userName: "Jenan Kmail",
      relation: "New to Instagra",
      profileImage: image5,
    },
  ];
  return (
    <div className="suggestions">
      <div className="suggestions__username">
        <div className="username__left">
          <Avatar
            sx={{ bgcolor: blueGrey[500], fontSize: "17px" }}
            src={image6}
          ></Avatar>

          <div className="username__info">
            <span className="username">ibraahhemi</span>
            <span className="relation">Ibraheem Shawhnee</span>
          </div>
        </div>
        <button className="follow__button">Switch</button>
      </div>

      <div className="suggestions__header">
        <div className="suggestions__title">Suggestions for you</div>
        <div className="suggestions__see__more">See more</div>
      </div>

      <div className="suggestions__usernames">
        {suggestionsPersons.map((person) => {
          return (
            <div key={person.id} className="suggestions__username">
              <div className="username__left">
                <Avatar
                  sx={{ bgcolor: blueGrey[500], fontSize: "17px" }}
                  src={person.profileImage}
                ></Avatar>

                <div className="username__info">
                  <span className="username">{person.userName}</span>
                  <span className="relation">{person.relation}</span>
                </div>
              </div>
              <button className="follow__button">Follow</button>
            </div>
          );
        })}
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
