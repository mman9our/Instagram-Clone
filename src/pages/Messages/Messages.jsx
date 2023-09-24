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
	Toolbar,
} from "@mui/material";
import "./Messages.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { EditNotifications } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
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
						{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
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
				<hr style={{ backgroundColor: "red", color: "red" }} />
				<div className="content">
					<div className="contact-info">
					<div className="account-details">

					</div>
						<Avatar src="src/assets/Avatars/nurse.png" />
					</div>
					<div className="chat"> justifyContent</div>
				</div>
				<Divider sx={{ color: "white", backgroundColor: "red" }} />
			</div>
		</div>
	);
};

export default Messages;
