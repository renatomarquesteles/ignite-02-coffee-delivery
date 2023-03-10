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

export const CoffeeCard = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2.5rem;
  }

  > h1 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    text-align: center;
  }

  > p {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

export const AddToCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.25rem;

  > span {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
  }
`;
export const AddToCartWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
