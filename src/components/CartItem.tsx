import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import skills from "../data/skills.json";

type CartItemsProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemsProps) {
  const { removeItem } = useShoppingCart();
  const item = skills.find((item) => item.id === id);
  const { increaseItemQuantity, decreaseItemQuantity } = useShoppingCart();

  if (item == null) return null;

  console.log("CartItem qty:", quantity);

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imageurl}
        style={{ height: "125px", objectFit: "contain", padding: "10px" }}
      />
      <div className="me-auto p-3">
        <div>{item.name}</div>
      </div>
      <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
      <div>
        <span style={{ fontSize: "1.25rem" }}>{quantity}</span>
      </div>
      <Button onClick={() => increaseItemQuantity(id)}>+</Button>

      <Button
        className="me-2"
        variant="outline-danger"
        size="sm"
        onClick={() => removeItem(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
