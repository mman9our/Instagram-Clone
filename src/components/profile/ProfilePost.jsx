import { useState } from "react";
import "./ProfilePost.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
const ProfilePost = ({ img, likes, comments }) => {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<div
			className="post"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img src={img} />
			<div className="photo-icon">
				<ContentCopyIcon />
			</div>
			{isHovered && (
				<div className="reactions">
					<div>
						{`${likes}`} <FavoriteSharpIcon />
					</div>
					<div>
						{`${comments}`}
						<ModeCommentIcon />
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfilePost;
