import { Col, Row } from "react-bootstrap";
import { SchoolItem } from "../components/SchoolItem";
import passionItems from "../data/passion.json";

export function Passion() {
  return (
    <>
      <h1>Passion</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {passionItems.map((item) => (
          <Col key={item.id}>
            <SchoolItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
