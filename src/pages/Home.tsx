import { Container, Card, CardGroup, Col, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { About } from "./About";

export function Home() {
  const [navShow, setNavShow] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setNavShow(window.scrollY);
      setIsNavVisible(window.scrollY <= 750);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {navShow > 750 && navShow !== 0 ? <Navbar /> : null}
      <Hero />
      <Container className="col-12 d-flex flex-wrap">
        <h1>Want to know more about me?</h1>
        <h5 className="ms-3 text-secondary">
          I am recent graduate of Northcentral Technical College in Wausau and I
          graduated with my second associates degree, this time in the IT -
          Software Developer program.
        </h5>

        <About />
        {/* <CardGroup className="me-auto ms-auto w-100">
          <Card className="m-2">
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
          <Card className="m-2">
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
          <Card className="m-2">
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
        </CardGroup> */}
      </Container>
    </>
  );
}
