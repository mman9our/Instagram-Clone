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
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
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
					<div className="upper-inbox">
						<div className="accounts">
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
						<div className="new-message">
							<InboxIcon />
						</div>
					</div>
					<div className="messages-section">
						<div>Messages</div>
						<div className="request">Request</div>
					</div>
					<List>
						{["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon
										sx={{ color: "white", justifyContent: "space-around" }}
									>
										<Avatar sizes="large" src={"src/assets/Avatars/boy.png"} />
										{/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</div>
				<hr style={{ border: " 1px solid rgba(255, 255, 255, 0.128)" }} />

				<div className="content">
					<div className="contact-info">
						<div className="account-details">
							<Avatar src="src/assets/Avatars/nurse.png" />
							<span
								style={{
									paddingLeft: "10px",
									fontWeight: "900",
								}}
							>
								Ibraheem Shawhnee
							</span>
						</div>
						<div className="communication-methods">
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
					<hr />
					<div className="chat">
						<div className="left">
							<SentimentSatisfiedAltOutlinedIcon />
							<input
								style={{
									paddingLeft: "10px",
									background: "none",
									border: "none",
									color: "white",
									width: "400px",
									fontSize: "20px",
								}}
							></input>
						</div>
						<div className="right">
							<KeyboardVoiceOutlinedIcon />
							<BrokenImageOutlinedIcon />
							<FavoriteBorderOutlinedIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
