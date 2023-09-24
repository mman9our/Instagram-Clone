import { Avatar, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import "./Story.css";
import { useState } from "react";

function Story() {
  const styles = {
    avatar: {
      width: 56,
      height: 56,
      bgcolor: blueGrey[500],
    },
  };

  const [stories] = useState([
    {
      id: 1,
      username: "mman9our",
      profileImage: "src/assets/Avatars/man.png",
    },
    {
      id: 2,
      username: "moath",
      profileImage: "src/assets/Avatars/boy.png",
    },
    {
      id: 3,
      username: "obada",
      profileImage: "src/assets/Avatars/cock-man.png",
    },
    {
      id: 4,
      username: "saja",
      profileImage: "src/assets/Avatars/shop-assistant.png",
    },
    {
      id: 5,
      username: "dalal",
      profileImage: "src/assets/Avatars/singer.png",
    },
    {
      id: 6,
      username: "ahmad",
      profileImage: "src/assets/Avatars/steward.png",
    },
  ]);

  return (
    <>
      <div className="stories__section">
        {stories.map((story) => (
          <div key={story.id} className="story__header">
            <div className="avatarContainer">
              <Avatar src={story.profileImage} sx={styles.avatar} />
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
