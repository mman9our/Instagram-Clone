import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PropTypes from "prop-types";
import { indigo } from "@mui/material/colors";

function Post({ user, postImage, likes, timestamp, description, comments }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar sx={{ bgcolor: indigo[500], marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span style={{ marginLeft: "10px" }}>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img height="650px" width="650px" src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon
              style={{ cursor: "pointer" }}
              className="postIcon"
            />
            <ChatBubbleOutlineIcon
              style={{ cursor: "pointer" }}
              className="postIcon"
            />
            <TelegramIcon style={{ cursor: "pointer" }} className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <div>
          <div style={{ fontWeight: "bold" }}>{likes} likes</div>
          <span>{description}</span>
          <div style={{ color: "grey", marginTop: "10px" }}>
            View all {comments} comments
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

Post.propTypes = {
  user: PropTypes.node.isRequired,
  postImage: PropTypes.node.isRequired,
  likes: PropTypes.node.isRequired,
  timestamp: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  comments: PropTypes.node.isRequired,
};
