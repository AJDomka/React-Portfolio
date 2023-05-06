import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <Container fluid className="text-center bg-info">
      <Row>
        <Col>
          <h5 className="text-uppercase">Adam Domka</h5>
          <p>Browse the links below to view some of my projects.</p>
        </Col>

        <hr className="clearfix w-100 pb-0" />

        <Col>
          <h5 className="text-uppercase">School Projects</h5>
          <ul className="list-unstyled">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ajdomka.github.io/Collaborative-App-Dev/"
              >
                Collaborative App Dev
              </a>
            </li>
            <li>
              <a href="/SoftwareArch">Software Architecture</a>
            </li>
            <li>
              <a href="/Capstone">Capstone</a>
            </li>
          </ul>
        </Col>

        <Col>
          <h5 className="text-uppercase">Passion Projects</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/EngineeringTomorrow">Engineering Tomorrow</a>
            </li>
            <li>
              <a href="/Animation">Animation</a>
            </li>
            <li>
              <a href="/LucidPasta">Lucid Pasta</a>
            </li>
            <li>
              <a href="/MostlyWaste">Mostly Waste</a>
            </li>
          </ul>
        </Col>

        <Col>
          <h5 className="text-uppercase">Social Media</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">LinkedIn</a>
            </li>
            <li>
              <a href="#!">GitHub</a>
            </li>
          </ul>
        </Col>
      </Row>
      <p>
        Copyright &copy; {new Date().getFullYear()} Adam Domka All Rights
        Reserved
      </p>
    </Container>
  </>
);

export default Footer;
