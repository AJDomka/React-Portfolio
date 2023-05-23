import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { SkillsModal } from "./SkillModal";
import { useState } from "react";

type SkillItemProps = {
  id: number;
  name: string;
  body: string;
  modaltext: string;
  imageurl: string;
  show: boolean;
  onHide: () => void;
};

export function SkillItem({
  id,
  name,
  body,
  modaltext,
  imageurl,
}: SkillItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useShoppingCart();

  const [modalShow, setModalShow] = useState(false);

  const quantity = getItemQuantity(id);
  console.log("quantity is:", { quantity });
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imageurl}
        height="150px"
        style={{ objectFit: "contain", padding: "10px" }}
      />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="d-flex align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
        </Card.Title>

        <span className="ms-2 text-secondary">
          {body}{" "}
          <Button
            variant="link"
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => setModalShow(true)}
          >
            Read More...
          </Button>
          <SkillsModal
            id={id}
            name={name}
            body={body}
            modaltext={modaltext}
            imageurl={imageurl}
            show={modalShow}
            onHide={() => setModalShow(false)}
            website={""}
          />
        </span>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              onClick={() => increaseItemQuantity(id)}
              style={{ padding: "5px 50px", marginTop: "10px" }}
            >
              Add Skill
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center m-1"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                <div>
                  <span className="fs-4">{quantity}</span>{" "}
                  {quantity === 1 ? (
                    <span>item in cart</span>
                  ) : (
                    <span>items in cart</span>
                  )}
                </div>
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeItem(id)}
                variant="danger"
                style={{ padding: "5px 50px" }}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
