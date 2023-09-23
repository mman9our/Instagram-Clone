import "./Home.css";

import Suggestions from "../../components/suggestions/Suggestions";
import Timeline from "../../components/timeline/Timeline";

function Home() {
	return (
		<>
			<div className="home__left">
					<Timeline />
			</div>
			<div className="home__right">
				<Suggestions />
			</div>
		</>
	);
}

export default Home;
