import { SetStateAction, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./css/ContactForm.css";
import { StateDropdown } from "./StateDropdown";
import React from "react";

export function ContactForm() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert(`The name you entered was: ${fName} ${lName}`);
  };

  const handleFNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFName(e.target.value);
  };
  const handleLNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setLName(e.target.value);
  };

  return (
    <>
      <Form className="form-container">
        {/* Name section */}
        <Row className="row-container">
          <h3 className="title-text">Tell me a little bit about you</h3>
          <Col className="col-container-left">
            <Form.Group className="form-group" controlId="formFirstName">
              <Form.Label className="label-container">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                value={fName}
                onChange={handleFNameChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col className="col-container-right">
            <Form.Group className="form-group" controlId="formLastName">
              <Form.Label className="label-container">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                value={lName}
                onChange={handleLNameChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>

        {/* Phone and email section */}
        <Row className="row-container">
          <Col className="col-container-left">
            <Form.Group className="form-group" controlId="formPhoneNumber">
              <Form.Label className="label-container">Phone Number</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="(123)-456-7890"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col className="col-container-right">
            <Form.Group className="form-group" controlId="formEmail">
              <Form.Label className="label-container">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row className="row-container">
          <Col className="col-container-left">
            <Form.Group className="form-group" controlId="formState">
              <Form.Label className="label-container">State</Form.Label>
              <Form.Select aria-label="Select state">
                <StateDropdown />
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="col-container-checkbox">
            <Form.Label className="label-checkbox">
              I don't live in the US
            </Form.Label>
            <Form.Check className="ms-4 mt-2" type="checkbox" />
          </Col>
        </Row>

        {/* Message and submit section */}
        <Form.Group className="form-group" controlId="formMessage">
          <Form.Label className="label-container">
            What did you want to tell me?
          </Form.Label>
          <textarea id="textarea" rows={5} />
        </Form.Group>

        <Button
          variant="primary"
          className="btn-submit"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
