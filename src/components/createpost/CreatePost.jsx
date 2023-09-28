import { Box, Button, Fade, Grid, Modal, Typography } from "@mui/material";
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
          <Box className="modal" sx={style} width={"80%"} maxWidth="600px">
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

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={12}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    color: "white",
                    fontWeight: "900",
                  }}
                >
                  Write post content here
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
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreatePost;
