import "./NotFound.css";
import Container from "@mui/material/Container";

const NotFound = () => {
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
        <h1>Sorry, this page isnt available.</h1>

        <p>
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
      </Container>
    </>
  );
};

export default NotFound;
