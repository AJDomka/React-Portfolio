import { Container, Card, CardGroup, Col, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

export function Home() {
  return (
    <>
      <Container className="col-10 d-flex flex-wrap">
        <h1 className="ms-3">Hello!! My name is Adam Domka</h1>
        <h5 className="ms-3 text-secondary">
          I am recent graduate of Northcentral Technical College in Wausau. I
          graduated with my second associates degree, this time in the program
          IT - Software Developer.
        </h5>
        <CardGroup className="me-auto ms-auto w-100">
          <Col>
            <Card className="my-2">
              <Card.Title className="text-center">Professional</Card.Title>
              <Card.Img src="src/images/Northcentral-logo.png" />
              <Card.Body className="text-center">
                Professional body text - Summary of the professional skills I've
                learned
              </Card.Body>
              <Link
                to="/Skills#professional-info"
                className="btn btn-primary w-50 ms-auto me-auto my-3"
                role="button"
              >
                View Professional Skills
              </Link>
            </Card>
            <Card className="my-2">
              <Card.Title className="text-center">Passion</Card.Title>
              <Card.Img src="src/images/Passion-logo.png" />
              <Card.Body className="text-center">
                <h3>H3llo</h3>
                Passion body text - Summary of what I am passionate about/enjoy
              </Card.Body>
              <Link
                to="/Skills#passion-info"
                className="btn btn-primary w-50 ms-auto me-auto my-3"
                role="button"
              >
                View Passion Skills
              </Link>
            </Card>
            <Card className="my-2">
              <Card.Title className="text-center">Passion</Card.Title>
              <Card.Img src="src/images/Passion-logo.png" />
              <Card.Body className="text-center">
                <h3>H3llo</h3>
                Passion body text - Summary of what I am passionate about/enjoy
              </Card.Body>
              <Link
                to="/Skills#hobby-info"
                className="btn btn-primary w-50 ms-auto me-auto my-3"
                role="button"
              >
                View Hobby Skills
              </Link>
            </Card>
          </Col>
        </CardGroup>
      </Container>
    </>
  );
}
