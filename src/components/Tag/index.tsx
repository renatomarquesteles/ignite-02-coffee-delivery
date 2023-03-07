import { ReactNode } from "react";
import { defaultTheme } from "../../styles/themes/default";
import { Container, IconContainer } from "./styles";

export type Color = keyof typeof defaultTheme;

interface TagProps {
  color?: Color;
  iconVariant?: boolean;
  children: ReactNode;
}

export const Tag = ({
  color = "yellow-light",
  iconVariant = false,
  children,
}: TagProps) => {
  if (iconVariant) {
    return <IconContainer color={color}>{children}</IconContainer>;
  }

  return <Container color={color}>{children}</Container>;
};
