import Suggestions from "../suggestions/Suggestions";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">TimeLine</div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
