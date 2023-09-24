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
        <h1>In Progress♨️</h1>

        <p style={{ color: "grey" }}>
          This page is currently under construction and will be coming soon.
        </p>

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
