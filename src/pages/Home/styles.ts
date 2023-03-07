import styled from "styled-components";

import backgroundImg from "../../assets/intro-background.png";

export const Page = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 10%;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Location = styled.div`
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 0.875rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: center;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const Introduction = styled.section`
  padding: 5.75rem 10rem;
  background: url(${backgroundImg});
  background-size: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
    line-height: 3.9rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  @media (max-width: 1280px) {
    img {
      width: 14rem;
    }
  }

  @media (max-width: 968px) {
    img {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 1.75rem 10%;
  }
`;

export const Benefits = styled.div`
  margin-top: 3.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
