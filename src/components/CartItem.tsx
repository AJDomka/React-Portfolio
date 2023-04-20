import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import softwareSkills from "../data/software.json";
type CartItemsProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemsProps) {
  const { removeItem } = useShoppingCart();
  const item = softwareSkills.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imageURL}
        style={{ width: "125px", objectFit: "contain", padding: "10px" }}
      />
      <div className="me-auto p-3">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".75rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeItem(item.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
}
