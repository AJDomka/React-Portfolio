import { Card, Modal, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { ReactNode } from "react";

type ShoppingCartProps = {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
};

export function ShoppingCart(props: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    // <>
    //   <div className="modal-overlay">
    //     <div className="modal-box">{props.children}</div>
    //   </div>
    // </>

    <Offcanvas show={open} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>

    // <Modal
    //   className="modal fade"
    //   id="exampleModalCenter"
    //   role="dialog"
    //   aria-labelledby="exampleModalCenterTitle"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog modal-dialog-centered" role="document">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title" id="exampleModalLongTitle">
    //           Modal title
    //         </h5>
    //         <button
    //           type="button"
    //           className="close"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">...</div>
    //       <div className="modal-footer">
    //         <button
    //           type="button"
    //           className="btn btn-secondary"
    //           data-dismiss="modal"
    //         >
    //           Close
    //         </button>
    //         <button type="button" className="btn btn-primary">
    //           Save changes
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </Modal>
  );
}
