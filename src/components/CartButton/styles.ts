import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  notifications: number;
}

export const Container = styled.button<ContainerProps>`
  width: 2.375rem;
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.notifications &&
    css`
      &:after {
        content: "${props.notifications}";
        width: 1.25rem;
        height: 1.25rem;
        font-size: 0.75rem;
        font-weight: 700;
        background: ${(props) => props.theme["yellow-dark"]};
        color: ${(props) => props.theme.white};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.625rem;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
      }
    `}
`;
