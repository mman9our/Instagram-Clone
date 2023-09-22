import "./Home.css";
import Timeline from "../../components/timeline/Timeline";
function Home() {
	return (
		<div className="homepage">
			<div className="homepage__timeline">
				<Timeline />
			</div>
		</div>
	);
}

export default Home;
