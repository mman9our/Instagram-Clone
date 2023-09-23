import ExplorePost from "../../components/expolre/ExplorePost";
import "./Explore.css";

const Explore = () => {
	const explorePosts = [
		{
			img: "src/assets/ExplorePics/explorePic1.avif",
			likes: 400,
			comments: 230,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic2.avif",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic10.webp",
			likes: 210,
			comments: 3,
			isVideo: true,
		},
		{
			img: "src/assets/ExplorePics/explorePic4.avif",
			likes: 430,
			comments: 213,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic11.webp",
			likes: 430,
			comments: 213,
			isVideo: true,
		},
		{
			img: "src/assets/ExplorePics/explorePic5.avif",
			likes: 430,
			comments: 213,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic6.avif",
			likes: 430,
			comments: 213,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic7.avif",
			likes: 400,
			comments: 230,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic12.webp",
			likes: 200,
			comments: 400,
			isVideo: true,
		},
		{
			img: "src/assets/ExplorePics/explorePic3.avif",
			likes: 210,
			comments: 3,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic8.avif",
			likes: 430,
			comments: 213,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic9.avif",
			likes: 430,
			comments: 213,
			isVideo: true,
		},
		{
			img: "src/assets/ExplorePics/explorePic13.webp",
			likes: 430,
			comments: 213,
			isVideo: true,
		},
		{
			img: "src/assets/ExplorePics/explorePic14.webp",
			likes: 430,
			comments: 213,
			isVideo: true,
		},
	];
	return (
		<div className="explore-wrapper">
			<div className="explore-parent">
				{explorePosts.map(({ img, likes, comments, isVideo }, index) => {
					return (
						<ExplorePost
							key={index}
							img={img}
							likes={likes}
							comments={comments}
							isVideo={isVideo}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Explore;
