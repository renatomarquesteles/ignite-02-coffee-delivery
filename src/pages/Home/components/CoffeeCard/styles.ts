import styled from "styled-components";

export const Container = styled.div`
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
