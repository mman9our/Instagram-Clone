import { Avatar, Box, Tab, Tabs } from "@mui/material";
import "./Profile.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InsertLinkSharpIcon from "@mui/icons-material/InsertLinkSharp";
import ProfileButton from "../../components/profile/profileButton";
import { useState } from "react";

const Profile = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="profile">
			<div className="profile-details">
				<div className="profile-picture">
					<Avatar
						src="src/assets/Avatars/man.png"
						sx={{ width: 200, height: 200 }}
					/>
				</div>
				<div className="profile-info-wrapper">
					<div className="upper-profile-info">
						<h3 style={{ paddingRight: "10px" }}>mman9our</h3>
						<ProfileButton text={"Edit profile"} />
						<ProfileButton text={"View actions"} />
						<SettingsOutlinedIcon color="white" />
					</div>
					<div className="middle-profile-info">
						<h4 style={{ paddingRight: "10px" }}>2 Posts</h4>
						<h4 style={{ paddingRight: "10px" }}>269 followers</h4>
						<h4 style={{ paddingRight: "10px" }}>2,183 following</h4>
					</div>
					<div className="bottom-profile-info">
						<div style={{ paddingRight: "10px" }}>𝗠𝗼𝗵𝗮𝗺𝗲𝗱 𝗠𝗮𝗻𝘀𝗼𝘂𝗿</div>
						<h4 style={{ paddingRight: "10px" }}>𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿.💻</h4>
						<div
							style={{
								paddingRight: "10px",
								alignItems: "center",
								display: "flex",
							}}
						>
							<InsertLinkSharpIcon />
							<a
								href="https://bento.me/mman9our"
								style={{ color: "white", paddingLeft: "4px" }}
							>
								bento.me/mman9our
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="recent-posts">
				<Box
					sx={{
						width: "50%",
						bgcolor: "black",
						color: "white",
						borderTop: "1px solid #212121",
						marginTop: "10px",
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						centered
						TabIndicatorProps={{
							sx: {
								backgroundColor: "white",

								top: 0,
							},
						}}
					>
						<Tab
							label="Posts"
							sx={{
								color: "#ffffff",
								"&.Mui-selected": {
									color: "white",
								},
								":hover": {
									fontWeight: 900,
									color: "white",
								},
								"&:active": {
									boxShadow: "none",
									fontWeight: 900,
									backgroundColor: "#101010",
									color: "#ffffff",
								},
							}}
						/>
						<Tab
							label="Reels"
							sx={{
								color: "#ffffff",
								"&.Mui-selected": {
									color: "white",
								},
								":hover": {
									fontWeight: 900,
									color: "white",
								},
								"&:active": {
									boxShadow: "none",
									backgroundColor: "#101010",
									color: "#ffffff",
								},
							}}
						/>
						<Tab
							label="Tagged"
							sx={{
								color: "#ffffff",
								"&.Mui-selected": {
									color: "white",
								},
								":hover": {
									color: "white",
									fontWeight: 900,
								},
								"&:active": {
									boxShadow: "none",
									backgroundColor: "#101010",
									color: "#ffffff",
								},
							}}
						/>
					</Tabs>
				</Box>
			</div>
		</div>
	);
};

export default Profile;
