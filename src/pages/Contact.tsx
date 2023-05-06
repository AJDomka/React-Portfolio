import { Container } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";

export function Contact() {
  return (
    <>
      <Container className="col-10">
        <h1 className="my-2">Want to get in touch?</h1>
        <ContactForm />
      </Container>
    </>
  );
}
