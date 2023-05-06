import { Modal, Button, Container } from "react-bootstrap";
// import { skillsInfo } from "../data/skills.json";

type SkillItemProps = {
  id: number;
  name: string;
  body: string;
  imageurl: string;
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
        <Modal.Body>
          <p>{props.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
