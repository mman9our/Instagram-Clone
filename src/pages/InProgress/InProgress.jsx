import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

const InProgress = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>In Progress♨️</h1>

        <Typography
          variant="body1"
          style={{
            color: "grey",

            textAlign: "center",
          }}
          gutterBottom
        >
          This page is currently under construction and will be coming soon.
        </Typography>

        <img
          src={`src/assets/rocket-launch.png`}
          alt="Rocket Launch"
          style={{ width: "200px", height: "200px" }}
        />
      </Container>
    </>
  );
};

export default InProgress;
