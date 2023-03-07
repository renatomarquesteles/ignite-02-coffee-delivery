import styled from "styled-components";

import { Color } from "./";

interface BaseContainerProps {
  color: Color;
}

const BaseContainer = styled.div<BaseContainerProps>`
  display: flex;
  flex-direction: center;
  align-items: center;
  background: ${(props) => props.theme[props.color]};
`;

export const Container = styled(BaseContainer)`
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  border-radius: 6.25rem;
`;

export const IconContainer = styled(BaseContainer)`
  width: fit-content;
  padding: 0.5rem;
  border-radius: 50%;
`;
