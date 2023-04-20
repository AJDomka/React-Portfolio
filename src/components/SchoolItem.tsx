import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type SchoolItemProps = {
  id: number;
  name: string;
  body: string;
  imageURL: string;
};

export function SchoolItem({ id, name, body, imageURL }: SchoolItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  console.log("quantity is:", { quantity });
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imageURL}
        height="100px"
        style={{ objectFit: "contain", padding: "10px" }}
      />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="d-flex align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
        </Card.Title>

        <span className="ms-2">{body}</span>
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
