import { Container } from "react-bootstrap";
import { Navbar } from "../components/Navbar";

export function Portfolio() {
  return (
    <>
      <Navbar />
      <h1 className="text-center">Checkout my old portfolio website below!</h1>
      <Container className="col-12 d-flex">
        <embed
          src="https://ajdomka.com"
          style={{ width: "100vw", height: "100vh" }}
        />
      </Container>
    </>
  );
}
