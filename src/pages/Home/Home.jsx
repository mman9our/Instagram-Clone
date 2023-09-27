import "./Home.css";

import Suggestions from "../../components/suggestions/Suggestions";
import Timeline from "../../components/timeline/Timeline";
import { useEffect, useState } from "react";

function Home() {
	const [isMediumScreen, setIsMediumScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMediumScreen(window.innerWidth <= 805);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div className="home__left">
				<Timeline />
			</div>

			{!isMediumScreen && (
				<div className="home__right">
					<Suggestions />
				</div>
			)}
		</>
	);
}

export default Home;
