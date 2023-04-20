import { useState } from "react";

export function useCart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
}
