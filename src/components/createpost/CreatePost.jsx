import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import "./createpost.css";
import Backdrop from "@mui/material/Backdrop";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	color: "black",
	transform: "translate(-50%, -50%)",
	bgcolor: "rgb(29, 29, 29)",
	boxShadow: 24,
};
const Heading = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "16px",
	color: "white",
	fontWeight: "900",
	padding: "6px",
};
const CreatePost = ({ open, onClose }) => {
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={onClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box
						className="modal"
						sx={style}
						width={"38%"}
						height={"80%"}
						borderRadius={"20px"}
					>
						<Box
							sx={{
								borderBottom: "0.5px solid rgb(41, 41, 41)",
								padding: 0,
								margin: 0,
							}}
						>
							<Typography
								id="transition-modal-title"
								variant="h6"
								style={Heading}
							>
								Create new post
							</Typography>
						</Box>

						<Typography
							id="transition-modal-description"
							sx={{
								mt: 2,
								color: "white",
								fontWeight: 900,
								padding: "40px",
							}}
						>
							<Box className="inputTitle">
								<div>Title</div>
								<div>
									<input
										style={{
											color: "white",
											marginTop: "15px",
											backgroundColor: "#4D4D4D",
											width: "550px",
											padding: "10px",
											borderRadius: "10px",
											border: "1px solid white",
										}}
									></input>
								</div>
							</Box>
							<Box className="inputTitle" sx={{ marginTop: "30px" }}>
								<div>Body</div>
								<div>
									<textarea
										style={{
											color: "white",

											marginTop: "15px",
											backgroundColor: "#4D4D4D",
											width: "550px",
											height: "200px",
											borderRadius: "10px",

											border: "1px solid white",
										}}
									></textarea>
								</div>
							</Box>
							<Box className="inputTitle" sx={{ marginTop: "80px" }}>
								<div>Image URL</div>
								<div>
									<input
										style={{
											color: "white",

											marginTop: "15px",
											backgroundColor: "#4D4D4D",
											width: "550px",
											padding: "10px",
											borderRadius: "10px",
											border: "1px solid white",
										}}
									></input>
								</div>
							</Box>
							<div
								style={{
									marginTop: "30px",
									alignItems: "center",
									justifyContent: "center",
									display: "flex",
								}}
							>
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
									Post{" "}
								</Button>
							</div>
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default CreatePost;
