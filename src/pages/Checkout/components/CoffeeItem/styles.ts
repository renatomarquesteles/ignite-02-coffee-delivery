import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding: 0 0.25rem 2rem;
  display: flex;

  > img {
    width: 4rem;
    height: 4rem;
  }

  > span {
    color: ${(props) => props.theme["base-text"]};
    margin-left: auto;
    font-weight: 700;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    > span {
      margin: 0;
    }
  }
`;

export const CoffeeItemWrapper = styled.div`
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 130%;
  }
`;

export const RemoveButton = styled.button`
  height: 2rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.75rem;
  line-height: 160%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    height: 2rem;
  }
`;
