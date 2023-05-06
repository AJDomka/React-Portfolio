import { Col, Container, Row } from "react-bootstrap";
import { SkillItem } from "../components/SkillItem";
import skills from "../data/skills.json";

export function Skills() {
  return (
    <>
      <Container className="col-10">
        <h1 id="professional-info">Professional</h1>
        <Row xs={1} md={2} lg={3} className="g-3 my-2 py-3">
          {skills.map((item) => {
            if (item.id >= 100 && item.id < 200) {
              return (
                <Col key={item.id}>
                  <SkillItem {...item} />
                </Col>
              );
            }
          })}
        </Row>
        <h1 id="passion-info">Passion</h1>
        <Row xs={1} md={2} lg={3} className="g-3 my-2 py-3">
          {skills.map((item) => {
            if (item.id >= 200 && item.id < 300) {
              return (
                <Col key={item.id}>
                  <SkillItem {...item} />
                </Col>
              );
            }
          })}
        </Row>
        <h1 id="hobby-info">Hobbies</h1>
        <Row xs={1} md={2} lg={3} className="g-3 my-2 py-3">
          {skills.map((item) => {
            if (item.id >= 300 && item.id < 400) {
              return (
                <Col key={item.id}>
                  <SkillItem {...item} />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </>
  );
}
