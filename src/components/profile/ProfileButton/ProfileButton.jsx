import { Button } from "@mui/material";
import './ProfileButton.css'
const ProfileButton = ({ text }) => {
	return (
		<Button
		className="profile-button"
			sx={{
				fontWeight: "700",
				marginRight: "10px",
				":hover": {
					bgcolor: "#212121",
					color: "white",
				},
				"&:active": {
					boxShadow: "none",
					backgroundColor: "#ffffff",
					color: "#000000",
				},
				backgroundColor: "#343434",
				color: "white",
			}}
		>
			{text}
		</Button>
	);
};
ProfileButton.prototype = {};
export default ProfileButton;
