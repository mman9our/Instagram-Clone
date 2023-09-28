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
import { useEffect, useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";

import image1 from "../../assets/Avatars/boy.png";
import image2 from "../../assets/messengar-logo.png";

const Messages = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 959);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="messages">
      <div className="messages-wrapper">
        <div className="inbox">
          <div className="inbox-top-section">
            {!isSmallScreen && (
              <div className="account-name">
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
            )}

            <div className="create-new-message">
              <InboxIcon sx={{ fontSize: { md: 25, lg: 30 } }} />
            </div>
          </div>
          {!isSmallScreen && (
            <div className="inbox-middle-section">
              <div className="messages-text">Messages</div>
              <div className="request-text">
                <a href="#">Request</a>
              </div>
            </div>
          )}
          <div className="inbox-bottom-section">
            <List>
              {[
                "Ibraheem Shawhnee",
                "Ibrahim Kilani",
                "ahmad shehab",
                "Khalid Nidal",
              ].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon
                      sx={{ color: "white", justifyContent: "space-around" }}
                    >
                      <Avatar sizes="large" src={image1} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </div>

        <div className="content">
          <div className="messenger-logo">
            <img src={image2} alt="Messages Icon" />
          </div>
          <div className="message-heading">Your Messages</div>
          <div className="message-description">
            Send private photos and messages to a friend or group
          </div>
          <div className="send-message-btn">
            <Button
              className="send-message-btn"
              sx={{
                fontWeight: 900,
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "10px",
                fontSize: "14px",
                color: "white",
                backgroundColor: "rgb(14,127 ,244)",
                ":hover": {
                  bgcolor: "rgb(3, 90, 168)",
                  color: "white",
                },
                "&:active": {
                  boxShadow: "none",
                  backgroundColor: "#rgb(14,127 ,244)",
                  color: "white",
                },
              }}
            >
              Send message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
