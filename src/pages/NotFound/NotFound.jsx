import "./NotFound.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
          textAlign: "center",
        }}
      >
        <h1>Sorry, this page isnt available.</h1>

        <p>
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
        <Link to="/">
          <Button variant="outlined" color="error">
            Back To Home
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default NotFound;
