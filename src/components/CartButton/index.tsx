import { ButtonHTMLAttributes, ReactNode, useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import { Container } from "./styles";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  notifications?: number;
}

export const CartButton = ({
  notifications = 1,
  children,
  ...props
}: CartButtonProps) => {
  const { orderItems } = useContext(CartContext);

  return (
    <Container notifications={orderItems.length} {...props}>
      {children}
    </Container>
  );
};
