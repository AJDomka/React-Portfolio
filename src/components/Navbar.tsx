import { Container, Nav, Navbar as BsNavbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useCart } from "../hooks/useCart";
import { Cart } from "./Cart";
import "../components/css/Navbar.css";
import { useEffect, useState } from "react";

export function Navbar() {
  const { isOpen, toggle } = useCart();
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <BsNavbar sticky="top" className="animated-navbar bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/skills" as={NavLink}>
            Skills
          </Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
          <Nav.Link to="/portfolio" as={NavLink}>
            Portfolio
          </Nav.Link>
        </Nav>
        <Button
          onClick={toggle}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 1 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center text-white"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(33%, 33%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
        <Cart isOpen={isOpen} toggle={toggle}></Cart>
      </Container>
    </BsNavbar>
  );
}
