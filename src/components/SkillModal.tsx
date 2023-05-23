import * as React from "react";
import { Modal, Button, Container, Form, Row, Col } from "react-bootstrap";

type SkillItemProps = {
  id: number;
  name: string;
  body: string;
  modaltext: string;
  imageurl: string;
  website: string;
  show: boolean;
  onHide: () => void;
};

export function SkillsModal(props: SkillItemProps) {
  return (
    <Container>
      <Modal {...props} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <img
          src={props.imageurl}
          style={{
            height: "300px",
            margin: "16px auto",
          }}
        />
        <Modal.Body className="text-secondary">
          <p>{props.modaltext}</p>
          {props.name == "Disc Golf" && (
            <Row className="col-10 w-100">
              <Col className="me-3">
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label className="w-100">First Name</Form.Label>
                  <Form.Control type="text" placeholder="John" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col className="ms-3">
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Doe" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          {props.name == "Disc Golf" && (
            <Button
              href="https://www.pdga.com/dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDGA API
            </Button>
          )}
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
