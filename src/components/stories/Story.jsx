import { Avatar, Typography } from "@mui/material";
import "./Story.css";
import { useEffect, useState } from "react";

function Story() {
  // const [stories] = useState([
  //   {
  //     id: 1,
  //     username: "ameena",
  //     profileImage: "src/assets/StoriesAvatars/saleswoman.png",
  //     bgColor: "#071a33",
  //   },
  //   {
  //     id: 2,
  //     username: "moath",
  //     profileImage: "src/assets/StoriesAvatars/driver.png",
  //     bgColor: "#071a33",
  //   },
  //   {
  //     id: 3,
  //     username: "obada",
  //     profileImage: "src/assets/Avatars/cock-man.png",
  //     bgColor: "#071a33",
  //   },
  //   {
  //     id: 4,
  //     username: "saja",
  //     profileImage: "src/assets/StoriesAvatars/female-chef.png",
  //     bgColor: "#071a33",
  //   },
  //   {
  //     id: 5,
  //     username: "dalal",
  //     profileImage: "src/assets/StoriesAvatars/flight-attendant.png",
  //     bgColor: "#071a33",
  //   },
  //   {
  //     id: 6,
  //     username: "ahmad",
  //     profileImage: "src/assets/StoriesAvatars/graduated-student.png",
  //     bgColor: "#071a33",
  //   },
  //   {
  //     id: 7,
  //     username: "adel",
  //     profileImage: "src/assets/StoriesAvatars/farmer-avatar.png",
  //     bgColor: "#071a33",
  //   },
  // ]);

  const [visibleStories, setVisibleStories] = useState([]);
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

  const updateVisibleStories = () => {
    const screenWidth = window.innerWidth;
    let maxStories = 7;

    if (screenWidth < 600) {
      maxStories = 4;
    } else if (screenWidth < 767) {
      maxStories = 4;
    } else if (screenWidth < 1393) {
      maxStories = 5;
    } else if (screenWidth < 960) {
      maxStories = 4;
    }

    const visible = stories.slice(0, maxStories);
    setVisibleStories(visible);
  };

  useEffect(() => {
    updateVisibleStories();
    window.addEventListener("resize", updateVisibleStories);
    return () => {
      window.removeEventListener("resize", updateVisibleStories);
    };
  }, []);

  return (
    <>
      <div className="stories__section">
        {visibleStories.map((story) => (
          <div key={story.id} className="story__header">
            <div className="avatarContainer">
              <Avatar
                className="avatar"
                src={story.profileImage}
                sx={{
                  width: "65px",
                  height: "65px",
                  bgcolor: story.bgColor,
                }}
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
