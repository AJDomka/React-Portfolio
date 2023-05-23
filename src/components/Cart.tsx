import "./css/Cart.css";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Form,
  Modal,
  Row,
  Stack,
} from "react-bootstrap";
import { CartItem } from "./CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";

type ShoppingCartProps = {
  isOpen: boolean;
  toggle: () => void;
};

export function Cart(props: ShoppingCartProps) {
  const { cartItems, cartQuantity } = useShoppingCart();
  console.log("props obj:", props);

  const [showCheckout, setShowCheckout] = useState(false);

  const openCheckout = () => {
    setShowCheckout(true);
  };

  const closeCheckout = () => {
    setShowCheckout(false);
  };

  const handleOverlayClick = () => {
    props.toggle();
  };

  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal-box text-center"
          >
            <h1 className="cart-title">Your cart is listed below</h1>

            <CardGroup>
              <Stack gap={3} className="bg-danger">
                {cartItems.map((item) => (
                  <div style={{ height: "150px" }}>
                    <Card key={item.id} className="bg-info h-100">
                      <CartItem key={item.id} {...item} />
                    </Card>
                  </div>
                ))}
              </Stack>
            </CardGroup>
            <Button className="mt-5" onClick={openCheckout}>
              Checkout Now!
            </Button>
          </div>
        </div>
      )}

      <Modal show={showCheckout} onHide={closeCheckout}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout now!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have {cartQuantity} items in your cart.</p>
          <p>
            Enter your info below if you would like to contact me now about my
            availibilty of these items.
          </p>
          <Form className="mt-4">
            {/* Name section */}
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

            {/* Message and submit section */}
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>
                Did you have any questions or comments about your cart?
              </Form.Label>
              <textarea className="w-100" id="textarea" rows={5} />
            </Form.Group>
          </Form>

          <Button>Inquire now!</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
