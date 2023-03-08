import styled from "styled-components";

export const Container = styled.main`
  padding: 2.5rem 10rem;
  display: flex;
  gap: 2rem;
`;

export const Subtitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CustomerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const BaseCard = styled.section`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const AddressCard = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
    margin-top: 0.375rem;
  }
`;

export const AddressCardDescription = styled.div`
  display: flex;
  gap: 0.5rem;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    line-height: 130%;
    margin-top: 0.125rem;
  }
`;

export const AddressInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddressInputsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  input {
    width: 100%;
    padding: 0.75rem;
    background: ${(props) => props.theme["base-input"]};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    line-height: 130%;

    &.mid {
      max-width: 12.5rem;
    }

    &.short {
      max-width: 3.75rem;
    }
  }
`;

export const PaymentCard = styled(BaseCard)``;

export const CartInfo = styled.div`
  flex: 1;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CartCard = styled(BaseCard)``;
