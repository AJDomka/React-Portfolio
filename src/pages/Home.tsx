import { Container } from "react-bootstrap";
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
      <Container className="col-10 d-flex flex-wrap">
        <About />
      </Container>
    </>
  );
}
