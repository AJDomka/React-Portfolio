import { Container } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";
import { Navbar } from "../components/Navbar";
import "../components/css/Contact.css";

export function Contact() {
  return (
    <>
      <Navbar />
      <Container id="contact-container">
        <h1 className="my-2">Want to get in touch?</h1>
        <ContactForm />
      </Container>
    </>
  );
}
