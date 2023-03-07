import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { defaultTheme } from "../../styles/themes/default";

type Color = keyof typeof defaultTheme;

interface ContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: Color;
}

export const Container = styled.button<ContainerProps>`
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(140%);
  }
`;
