import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { SkillsModal } from "./SkillModal";
import { useState } from "react";
import "../components/css/SkillItem.css";

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

  // console.log("quantity is:", { quantity });
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imageurl} className="card-img" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">
          <span className="card-title-span">{name}</span>
        </Card.Title>

        <span className="body-span">
          {body}{" "}
          <Button variant="link" onClick={() => setModalShow(true)}>
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
        <div className="add-remove">
          {quantity === 0 ? (
            <Button
              onClick={() => increaseItemQuantity(id)}
              className="add-remove-btn"
            >
              Add Skill
            </Button>
          ) : (
            <div className="card-col">
              <div className="card-item-row">
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                <div>
                  <span className="quantity-span">{quantity}</span>{" "}
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
                className="add-remove-btn"
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
