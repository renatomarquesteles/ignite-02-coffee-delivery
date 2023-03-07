import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: 2.375rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  flex-direction: center;
  align-items: center;
  gap: 0.25rem;

  button {
    width: 0.875rem;
    background: none;
    border: 0;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  span {
    width: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
    line-height: 130%;
    text-align: center;
  }
`;
