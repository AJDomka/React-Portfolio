import { Container } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";
import { Navbar } from "../components/Navbar";

export function Contact() {
  return (
    <>
      <Navbar />
      <Container className="col-10">
        <h1 className="my-2">Want to get in touch?</h1>
        <ContactForm />
      </Container>
    </>
  );
}
