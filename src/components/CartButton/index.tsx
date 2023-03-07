import { ButtonHTMLAttributes, ReactNode } from "react";

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
  return (
    <Container notifications={notifications} {...props}>
      {children}
    </Container>
  );
};
