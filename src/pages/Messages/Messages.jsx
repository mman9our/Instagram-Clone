import {
	Avatar,
	Button,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from "@mui/material";
import "./Messages.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
const Messages = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className="messages">
			<div className="messages-wrapper">
				<div className="inbox">
					<div className="inbox-top-section">
						<div className="account-name">
							<Button
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
								endIcon={<KeyboardArrowDownIcon />}
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
						<div className="create-new-message">
							<InboxIcon />
						</div>
					</div>
					<div className="inbox-middle-section">
						<div className="messages-text">Messages</div>
						<div className="request-text">
							<a href="#">Request</a>
						</div>
					</div>
					<div className="inbox-bottom-section">
						<List>
							{[
								"Ibraheem Shawhnee",
								"Rasheed AbuKhader",
								"Ahmad AbuKhader",
								"Khaled Mohammad",
							].map((text) => (
								<ListItem key={text} disablePadding>
									<ListItemButton>
										<ListItemIcon
											sx={{ color: "white", justifyContent: "space-around" }}
										>
											<Avatar
												sizes="large"
												src={"src/assets/Avatars/boy.png"}
											/>
											{/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
										</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</div>
				</div>

				<div className="content">
					<div className="line">
						<div className="chat-info">
							<div className="user-info">
								<div className="user-image">
									<Avatar
										src="src/assets/Avatars/boy.png"
										sx={{ width: "60px", height: "60px" }}
									/>
								</div>
								<div className="user-name">Ibraheem Shawhnee</div>
							</div>
							<div className="communication">
								<span>
									<CallOutlinedIcon
										sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}
									/>
								</span>
								<span>
									<VideocamOutlinedIcon
										sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}
									/>
								</span>
								<span>
									<InfoOutlinedIcon
										sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}
									/>
								</span>
							</div>
						</div>
					</div>
					<div className="chat-content">
						<div className="message">
							<div className="emojis">
								<MoodOutlinedIcon
									sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}
								/>
							</div>
							<div className="input-message">
								<input placeholder="Message"></input>
							</div>
						</div>
						<div className="message-type">
							<span>
								<KeyboardVoiceOutlinedIcon
									sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}
								/>
							</span>
							<span>
								<BrokenImageOutlinedIcon
									sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}
								/>
							</span>
							<span>
								<FavoriteBorderOutlinedIcon
									sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 30 } }}
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
