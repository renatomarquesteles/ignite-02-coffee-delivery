import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 1.75rem 10%;
  }

  @media (max-width: 480px) {
    img {
      width: 20rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 130%;
  }
`;

export const Summary = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  /* GRADIENT BORDER */
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background: linear-gradient(
      to right,
      ${(props) => props.theme.background},
      ${(props) => props.theme.background}
    ),
    linear-gradient(
      120deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const TextGroup = styled.div`
  p {
    color: ${(props) => props.theme["base-text"]};
    line-height: 130%;

    span {
      font-weight: 700;
    }
  }
`;
