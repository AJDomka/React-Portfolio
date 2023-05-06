import "./css/Cart.css";
import { Button, Card, CardGroup, Stack } from "react-bootstrap";
import { CartItem } from "./CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  // children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
};

export function Cart(props: ShoppingCartProps) {
  const { cartItems } = useShoppingCart();
  console.log("props obj:", props);
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
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
            <Button className="mt-5">Checkout Now!</Button>
          </div>
        </div>
      )}
    </>
  );
}
