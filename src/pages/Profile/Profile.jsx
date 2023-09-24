import { Avatar, Box, Tab, Tabs } from "@mui/material";
import "./Profile.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InsertLinkSharpIcon from "@mui/icons-material/InsertLinkSharp";
import ProfileButton from "../../components/profile/profileButton";
import { useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import ProfilePost from "../../components/profile/ProfilePost";

const Profile = () => {
	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const posts = [
		{
			img: "src/assets/ExplorePics/explorePic8.avif",
			likes: 400,
			comments: 230,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic7.avif",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic7.avif",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic7.avif",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
	];
	const reels = [
		{
			img: "src/assets/ExplorePics/explorePic2.avif",
			likes: 400,
			comments: 230,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic3.avif",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic4.avif",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic1.avif",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
	];
	const tagged = [
		{
			img: "src/assets/ExplorePics/explorePic10.webp",
			likes: 400,
			comments: 230,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic11.webp",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic14.webp",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
		{
			img: "src/assets/ExplorePics/explorePic13.webp",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
	];
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
					<TabContext value={value}>
						<Tabs
							value={value}
							onChange={handleChange}
							centered
							TabIndicatorProps={{
								sx: {
									backgroundColor: "white",
									padding: 0,
									top: 0,
								},
							}}
						>
							<Tab
								value="1"
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
								value="2"
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
								value="3"
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
						<TabPanel
							value="1"
							sx={{
								padding: 0,

								color: "white",
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							{posts.map(({ img, likes, comments }, index) => {
								return (
									<ProfilePost
										key={index}
										img={img}
										likes={likes}
										comments={comments}
									/>
								);
							})}
						</TabPanel>
						<TabPanel
							value="2"
							sx={{
								padding: 0,
								color: "white",
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							{reels.map(({ img, likes, comments }, index) => {
								return (
									<ProfilePost
										key={index}
										img={img}
										likes={likes}
										comments={comments}
									/>
								);
							})}
						</TabPanel>
						<TabPanel
							value="3"
							sx={{
								padding: 0,
								color: "white",
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							{tagged.map(({ img, likes, comments }, index) => {
								return (
									<ProfilePost
										key={index}
										img={img}
										likes={likes}
										comments={comments}
									/>
								);
							})}
						</TabPanel>
					</TabContext>
				</Box>
			</div>
		</div>
	);
};

export default Profile;
