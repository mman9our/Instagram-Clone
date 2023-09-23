import "./ExplorePost.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PropTypes from "prop-types";
import { useState } from "react";
const ExplorePost = ({ img, likes, comments, isVideo }) => {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<div
			className={`explore-post ${isVideo ? "is-video" : ""}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img src={img} />
			<div className="video-photo-icon">
				{isVideo && <PlayCircleOutlineIcon />}
			</div>
			{isHovered && (
				<div className="reactions">
					{`${likes}`} likes & {`${comments}`} Comments
				</div>
			)}
		</div>
	);
};

ExplorePost.propTypes = {
	img: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	comments: PropTypes.number.isRequired,
	isVideo: PropTypes.bool.isRequired,
};
export default ExplorePost;
