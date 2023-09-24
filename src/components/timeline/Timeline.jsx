import { useState } from "react";
import "./Timeline.css";
import Post from "../post/Post";
import Story from "../stories/Story";

function Timeline() {
  const [posts] = useState([
    {
      id: 1,
      user: "narjis",
      postImage:
        "https://i.seadn.io/gcs/files/86d12c8064b032cb853466418480482e.png?auto=format&dpr=1&w=1000",
      likes: 744,
      timestamp: "2h",
      description:
        "Enjoying a peaceful evening by the beach, watching the sun set over the horizon. The colors are simply breathtaking.☀️🤍",
      comments: 122,
    },
    {
      id: 2,
      user: "nada",
      postImage:
        "https://i.seadn.io/gcs/files/19cfef5b9ae1f5bff9e57f1264a7bdad.png?auto=format&dpr=1&w=1000",
      likes: 432,
      timestamp: "8h",
      description:
        "Hiking through the dense forest, surrounded by the beauty of nature. It's moments like these that remind me of the wonders of the world.🥐🍞",
      comments: 45,
    },
    {
      id: 3,
      user: "zain",
      postImage:
        "https://i.seadn.io/gcs/files/23e1eeb7ba33f603b46b1dd8f27b64a9.png?auto=format&dpr=1&w=1000",
      likes: 140,
      timestamp: "1d",
      description:
        "The city comes alive at night, with its dazzling lights and bustling streets. There's a certain energy in the air that's hard to describe.",
      comments: 15,
    },
    {
      id: 4,
      user: "ezz",
      postImage:
        "https://i.seadn.io/gcs/files/aa7190a6950184f3d57bb806fa909ec9.png?auto=format&dpr=1&w=1000",
      likes: 14,
      timestamp: "2d",
      description:
        "Embarking on a journey to explore new horizons. Adventure awaits, and I'm ready to embrace it with open arms.",
      comments: 2,
    },
  ]);

  return (
    <>
      <Story />
      {posts.map((post) => (
        <Post
          key={post.id}
          user={post.user}
          postImage={post.postImage}
          likes={post.likes}
          timestamp={post.timestamp}
          description={post.description}
          comments={post.comments}
        />
      ))}
    </>
  );
}

export default Timeline;
