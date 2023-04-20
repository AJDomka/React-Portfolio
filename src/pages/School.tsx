import { Col, Row } from "react-bootstrap";
import { SchoolItem } from "../components/SchoolItem";
import softwareItems from "../data/software.json";

// This is the equivalent to the Store page

export function School() {
  return (
    <>
      <h1>School</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {softwareItems.map((item) => (
          <Col key={item.id}>
            <SchoolItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
