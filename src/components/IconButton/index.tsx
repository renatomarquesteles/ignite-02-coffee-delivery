import { ButtonHTMLAttributes, ReactNode } from "react";

import { defaultTheme } from "../../styles/themes/default";

import { Container } from "./styles";

type Color = keyof typeof defaultTheme;

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  children: ReactNode;
  notifications?: number;
}

export const IconButton = ({
  color = "purple-dark",
  children,
  ...props
}: IconButtonProps) => {
  return (
    <Container color={color} {...props}>
      {children}
    </Container>
  );
};
