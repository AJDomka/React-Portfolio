import React, { ReactNode } from "react";
import "./Cart.css";
import { Card, CardGroup, Stack } from "react-bootstrap";
import { CartItem } from "./CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
};

export function Cart(props: ShoppingCartProps) {
  const { cartItems } = useShoppingCart();
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <h1 className="cart-title">Welcome to your cart</h1>

            {/* {props.children} */}
            <CardGroup>
              <Stack gap={3}>
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CartItem key={item.id} {...item} />
                  </Card>
                ))}
              </Stack>
            </CardGroup>
          </div>
        </div>
      )}
    </>
  );
}
