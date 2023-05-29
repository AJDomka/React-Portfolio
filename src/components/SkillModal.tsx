import * as React from "react";
import "../components/css/SkillModal.css";
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
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <img src={props.imageurl} />
        <Modal.Body className="text-secondary">
          <p>{props.modaltext}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
