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

export const Container = styled(BaseContainer)``;

export const IconContainer = styled(BaseContainer)`
  width: fit-content;
  padding: 0.5rem;
  border-radius: 50%;
`;
