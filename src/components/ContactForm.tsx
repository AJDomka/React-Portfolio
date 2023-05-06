import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./css/ContactForm.css";
import { StateDropdown } from "./StateDropdown";

export function ContactForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert(`The name you entered was: ${name}`);
  };
  return (
    <>
      <Form className="mt-4">
        {/* Name section */}
        <Row className="col-10 w-100">
          <h3>Tell me a little bit about you</h3>
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

        {/* Phone and email section */}
        <Row className="col-10 w-100">
          <Col className="me-3">
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="(123)-456-7890"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col className="ms-3">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row className="col-10 w-100">
          <Col className="me-3">
            <Form.Group className="mb-3" controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Select aria-label="Select state">
                <StateDropdown />
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="d-flex align-items-center ms-3">
            <Form.Label className="me-4 mt-3">
              I don't live in the US
            </Form.Label>
            <Form.Check className="ms-4 mt-2" type="checkbox" />
          </Col>
        </Row>

        {/* Message and submit section */}
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>What did you want to tell me?</Form.Label>
          <textarea className="w-100" id="textarea" rows={5} />
        </Form.Group>

        <Button
          variant="primary"
          className="w-25 me-auto ms-auto"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
