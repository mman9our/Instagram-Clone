import {
	Avatar,
	Box,
	Button,
	Divider,
	Menu,
	MenuItem,
	Tab,
	Tabs,
} from "@mui/material";
import "./Profile.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InsertLinkSharpIcon from "@mui/icons-material/InsertLinkSharp";
import ProfileButton from "../../components/profile/ProfileButton/ProfileButton";
import { useEffect, useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import ProfilePost from "../../components/profile/ProfilePost/ProfilePost";
import GridOnIcon from "@mui/icons-material/GridOn";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
const Profile = () => {
	const [value, setValue] = useState("1");
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const [isOtherScreen, setIsOtherScreen] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [isXsSmallScreen, setIsSxSmallScreen] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 768);
			setIsSxSmallScreen(window.innerWidth <= 600);
			setIsOtherScreen(window.innerWidth >= 600);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const posts = [
		{
			img: "https://i.seadn.io/gae/0o472RbZuOrE2CoahXA8xptNyY4O685CEDIxm3B9pEY40AjBS6fpxlkOEthuYhQTaokYPXO6IwfghJxekwVHgCNg7ZO6vn2stZKclys?auto=format&dpr=1&w=1000",
			likes: 400,
			comments: 230,
			isVideo: false,
		},
		{
			img: "https://i.seadn.io/gcs/files/f82ed3ca7cdc11220907f994cd26a00a.png?auto=format&dpr=1&w=1000",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
		{
			img: "https://i.seadn.io/gcs/files/673e04edaf854abae8f46fc5de0cc707.jpg?auto=format&dpr=1&w=1000",
			likes: 200,
			comments: 400,
			isVideo: false,
		},
		{
			img: "https://i.seadn.io/gae/PKfrxlff3-SX84COf-pSPEyf_RyF0wLdgUiEd8HmaavoDxPje1dGznf5tIKGwVoxZl40uAZgzca0a05W6aC9muHfpIW2XSsebqut7Q?auto=format&dpr=1&w=1000",
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
			{isSmallScreen && (
				<div className="nav">
					<div>
						<SettingsOutlinedIcon />
					</div>
					<div>
						<Button
							className="account-name-btn"
							sx={{
								fontWeight: 800,
								padding: 0,
								fontSize: "18px",
								backgroundColor: "black",
								":hover": {
									bgcolor: "#000000",
									color: "white",
								},
								"&:active": {
									boxShadow: "none",
									backgroundColor: "#000000",
									color: "#000000",
								},
							}}
							id="demo-customized-button"
							aria-controls={open ? "demo-customized-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							variant="contained"
							disableElevation
							onClick={handleClick}
							endIcon={<KeyboardArrowDownOutlinedIcon />}
						>
							mman9our
						</Button>
						<Menu
							sx={{ width: "130px" }}
							id="demo-customized-menu"
							MenuListProps={{
								"aria-labelledby": "demo-customized-button",
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose} disableRipple>
								Edit
							</MenuItem>
							<MenuItem onClick={handleClose} disableRipple>
								Duplicate
							</MenuItem>
							<Divider sx={{ my: 0.5 }} />
							<MenuItem onClick={handleClose} disableRipple>
								Archive
							</MenuItem>
							<MenuItem onClick={handleClose} disableRipple>
								More
							</MenuItem>
						</Menu>
					</div>
					<div>
						<PersonAddOutlinedIcon />
					</div>
				</div>
			)}
			{isOtherScreen ? (
				<div className="profile-details">
					<div className="profile-details-wrapper">
						<div className="profile-picture">
							<Avatar
								className="profile-avatar"
								src="src/assets/Avatars/man.png"
							/>
						</div>
						<div className="profile-info-wrapper">
							<div className="upper-profile-info">
								<h3 style={{ paddingRight: "10px", fontWeight: 700 }}>
									mman9our
								</h3>
								<ProfileButton text={"Edit profile"} />
								<ProfileButton text={"View actions"} />
								{!isSmallScreen && (
									<SettingsOutlinedIcon
										color="white"
										sx={{ cursor: "pointer" }}
									/>
								)}
							</div>
							<div className="middle-profile-info">
								<h4>4 Posts</h4>
								<h4>2,183 followers</h4>
								<h4>269 following</h4>
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
										target="blank"
									>
										bento.me/mman9our
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="mobile-profile-details">
					<div className="upper-profile">
						<div className="upper-upper-profile">
							<div className="profile-picture">
								<Avatar
									className="profile-avatar"
									src="src/assets/Avatars/man.png"
								/>
							</div>
							<div className="right-upper-profile">
								<div className="upper-right-upper-profile">
									<div>
										<h3 style={{ paddingRight: "10px", fontWeight: 700 }}>
											mman9our
										</h3>
									</div>
									<div>
										<SettingsOutlinedIcon
											color="white"
											sx={{ cursor: "pointer" }}
										/>
									</div>
								</div>
								<ProfileButton text="Edit profile" />
								<ProfileButton text="View actions" />
							</div>
						</div>
					</div>
					<div className="bottom-profile-info-sm">
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
								target="blank"
							>
								bento.me/mman9our
							</a>
						</div>
					</div>{" "}
				</div>
			)}

			<div className="recent-posts">
				<Box
					className="recent-post-box"
					sx={{
						width: "76%",
						borderTop: "1px solid #212121",
						marginTop: "10px",
					}}
				>
					{isSmallScreen && (
						<div className="middle-profile-info-sm">
							<h4>4 Posts</h4>
							<h4>2,183 followers</h4>
							<h4>269 following</h4>
						</div>
					)}
					<TabContext value={value}>
						<Tabs
							value={value}
							onChange={handleChange}
							centered
							TabIndicatorProps={{
								sx: {
									border: "1px solid black",
									backgroundColor: "white",
									padding: 0,
									top: 0,
								},
							}}
						>
							<Tab
								value="1"
								className="tab"
								label={
									<span
										className="tabs"
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											padding: 0,
											margin: 0,
										}}
									>
										<div className="icon-tap" style={{ paddingRight: "5px" }}>
											<GridOnIcon
												sx={{ fontSize: { xs: 15, sm: 15, md: 15, lg: 15 } }}
											/>
										</div>
										{!isSmallScreen && <span>POSTS</span>}
									</span>
								}
								sx={{
									height: "70px",

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
								className="tab"
								value="2"
								label={
									<span
										className="tabs"
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											padding: 0,
											margin: 0,
										}}
									>
										<div className="icon-tap" style={{ paddingRight: "5px" }}>
											<TurnedInNotIcon
												sx={{ fontSize: { xs: 15, sm: 15, md: 15, lg: 15 } }}
											/>
										</div>
										{!isSmallScreen && <span>SAVED</span>}
									</span>
								}
								sx={{
									height: "70px",

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
								className="tab"
								value="3"
								label={
									<span
										className="tabs"
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											padding: 0,
											margin: 0,
										}}
									>
										<div className="icon-tap" style={{ paddingRight: "5px" }}>
											<AssignmentIndIcon
												sx={{ fontSize: { xs: 15, sm: 15, md: 15, lg: 15 } }}
											/>
										</div>
										{!isSmallScreen && <span>TAGGED</span>}
									</span>
								}
								sx={{
									height: "70px",
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
							className="TabPanel"
							sx={{
								padding: 0,
								color: "white",
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gap: "5px",
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
							className="TabPanel"
							sx={{
								padding: 0,
								color: "white",
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gap: "16px",
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
							className="TabPanel"
							sx={{
								padding: 0,
								color: "white",
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gap: "16px",
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
