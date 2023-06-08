import { Col, Container, Row } from "react-bootstrap";
import { SkillItem } from "../components/SkillItem";
import skills from "../data/skills.json";
import { Navbar } from "../components/Navbar";
import "../components/css/Skills-Light.css";

export function Skills() {
  return (
    <>
      <Navbar />
      <Container id="container-col">
        <h1 id="technical-info">Technical</h1>
        <Row xs={1} md={2} lg={3} id="row-container">
          {skills.map((skill) => {
            if (skill.id >= 100 && skill.id < 200) {
              return (
                <Col key={skill.id}>
                  <SkillItem
                    show={false}
                    onHide={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    {...skill}
                  />
                </Col>
              );
            }
          })}
        </Row>
        <h1 id="passion-info">Passion</h1>
        <Row xs={1} md={2} lg={3} id="row-container">
          {skills.map((skill) => {
            if (skill.id >= 200 && skill.id < 300) {
              return (
                <Col key={skill.id}>
                  <SkillItem
                    show={false}
                    onHide={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    {...skill}
                  />
                </Col>
              );
            }
          })}
        </Row>
        <h1 id="hobby-info">Hobbies</h1>
        <Row xs={1} md={2} lg={3} id="row-container">
          {skills.map((skill) => {
            if (skill.id >= 300 && skill.id < 400) {
              return (
                <Col key={skill.id}>
                  <SkillItem
                    show={false}
                    onHide={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    {...skill}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </>
  );
}
