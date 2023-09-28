import ExplorePost from "../../components/expolre/ExplorePost";
import "./Explore.css";
import image1 from "../../assets/ExplorePics/explorePic1.avif";
import image2 from "../../../src/assets/ExplorePics/explorePic2.avif";
import image3 from "../../../src/assets/ExplorePics/explorePic10.webp";
import image4 from "../../../src/assets/ExplorePics/explorePic4.avif";
import image5 from "../../../src/assets/ExplorePics/explorePic11.webp";
import image6 from "../../../src/assets/ExplorePics/explorePic5.avif";
import image7 from "../../../src/assets/ExplorePics/explorePic6.avif";
import image8 from "../../../src/assets/ExplorePics/explorePic7.avif";
import image9 from "../../../src/assets/ExplorePics/explorePic12.webp";
import image10 from "../../../src/assets/ExplorePics/explorePic3.avif";
import image11 from "../../../src/assets/ExplorePics/explorePic8.avif";
import image12 from "../../../src/assets/ExplorePics/explorePic9.avif";
import image13 from "../../../src/assets/ExplorePics/explorePic13.webp";
import image14 from "../../../src/assets/ExplorePics/explorePic14.webp";

const Explore = () => {
  const explorePosts = [
    {
      img: image1,
      likes: 400,
      comments: 230,
      isVideo: false,
    },
    {
      img: image2,
      likes: 200,
      comments: 400,
      isVideo: false,
    },
    {
      img: image3,
      likes: 210,
      comments: 3,
      isVideo: true,
    },
    {
      img: image4,
      likes: 430,
      comments: 213,
      isVideo: false,
    },
    {
      img: image5,
      likes: 430,
      comments: 213,
      isVideo: true,
    },
    {
      img: image6,
      likes: 430,
      comments: 213,
      isVideo: false,
    },
    {
      img: image7,
      likes: 430,
      comments: 213,
      isVideo: false,
    },
    {
      img: image8,
      likes: 400,
      comments: 230,
      isVideo: false,
    },
    {
      img: image9,
      likes: 200,
      comments: 400,
      isVideo: true,
    },
    {
      img: image10,
      likes: 210,
      comments: 3,
      isVideo: false,
    },
    {
      img: image11,
      likes: 430,
      comments: 213,
      isVideo: false,
    },
    {
      img: image12,
      likes: 430,
      comments: 213,
      isVideo: true,
    },
    {
      img: image13,
      likes: 430,
      comments: 213,
      isVideo: true,
    },
    {
      img: image14,
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
