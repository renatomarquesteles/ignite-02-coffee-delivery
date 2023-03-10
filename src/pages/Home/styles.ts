import styled from "styled-components";

import backgroundImg from "../../assets/intro-background.png";

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

export const Menu = styled.section`
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.125rem;

  > h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    line-height: 130%;
  }

  @media (max-width: 768px) {
    padding: 1rem 10%;
  }
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
