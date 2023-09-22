import "./Home.css";
import Suggestions from "../../components/suggestions/Suggestions";
import Timeline from "../../timeline/Timeline";

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
