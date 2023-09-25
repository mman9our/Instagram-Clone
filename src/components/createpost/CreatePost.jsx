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
					<Box sx={style} width={"38%"} height={"80%"} borderRadius={"20px"}>
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
								width: "300px",
								height: "300px",
								justifyContent: "center",
								alignItems: "center",
								position: "absolute",
								top: "30%",
								bottom: "30%",
								left: "28%",
								right: "30%",
								color: "white",
								fontWeight: "900",
							}}
						>
							<div className="image-video">
								<div className="image">
									<PhotoOutlinedIcon
										sx={{
											fontSize: { xs: 12, sm: 16, md: 25, lg: 60 },
											color: "white",
										}}
									/>
								</div>
								<div className="video">
									<SmartDisplayOutlinedIcon
										sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 60 } }}
									/>
								</div>
							</div>
							<div style={{ display: "flex", justifyContent: "center" }}>
								Drag photos and videos here{" "}
							</div>
							<div
								style={{
									margin: "75px 45px 45px 45px",
									background: "rgb(14, 104, 197)",
									borderRadius: "8px",
								}}
							>
								<Button sx={{ color: "white", padding: "8px" }}>
									Select from computer
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
