import "./Home.css";
<<<<<<< HEAD
import Timeline from "../../components/timeline/Timeline";
=======
import Suggestions from "../../components/suggestions/Suggestions";
import Timeline from "../../timeline/Timeline";

>>>>>>> main
function Home() {
  return (
    <>
      <div className="home__left">
        <div className="home__posts">
          <Timeline />
        </div>
      </div>
      <div className="home__right">
        <Suggestions />
      </div>
    </>
  );
}

export default Home;
