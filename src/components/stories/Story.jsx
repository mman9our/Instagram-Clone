import { Avatar, Typography } from "@mui/material";
import "./Story.css";
import { useState } from "react";

function Story() {
  const [stories] = useState([
    {
      id: 1,
      username: "ameena",
      profileImage: "src/assets/StoriesAvatars/saleswoman.png",
      bgColor: "#071a33", 
    },
    {
      id: 2,
      username: "moath",
      profileImage: "src/assets/StoriesAvatars/driver.png",
      bgColor: "#071a33",
    },
    {
      id: 3,
      username: "obada",
      profileImage: "src/assets/Avatars/cock-man.png",
      bgColor: "#071a33", 
    },
    {
      id: 4,
      username: "saja",
      profileImage: "src/assets/StoriesAvatars/female-chef.png",
      bgColor: "#071a33", 
    },
    {
      id: 5,
      username: "dalal",
      profileImage: "src/assets/StoriesAvatars/flight-attendant.png",
      bgColor: "#071a33", 
    },
    {
      id: 6,
      username: "ahmad",
      profileImage: "src/assets/StoriesAvatars/graduated-student.png",
      bgColor: "#071a33", 
    },
    {
      id: 7,
      username: "adel",
      profileImage: "src/assets/StoriesAvatars/farmer-avatar.png",
      bgColor: "#071a33", 
    },
  ]);

  return (
    <>
      <div className="stories__section">
        {stories.map((story) => (
          <div key={story.id} className="story__header">
            <div className="avatarContainer">
              <Avatar
                src={story.profileImage}
                sx={{ width: 65, height: 65, bgcolor: story.bgColor }}
              />
            </div>
            <Typography
              sx={{ fontSize: 12, color: "grey" }}
              variant="h6"
              component="h6"
            >
              {story.username}
            </Typography>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
}

export default Story;
