import styled, { css } from "styled-components";

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

export const Card = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Description = styled.div`
  display: flex;
  gap: 0.5rem;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 130%;
    font-weight: 400;
    font-size: 1rem;
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
    position: relative;

    &.mid {
      max-width: 12.5rem;
    }

    &.short {
      max-width: 3.75rem;
    }
  }
`;

export const OptionalInputContainer = styled.div`
  flex: 1;
  position: relative;

  input {
    padding-right: 4.25rem;
  }

  &::after {
    content: "Optional";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.875rem 0.75rem;
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.75rem;
    line-height: 130%;
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;

  input {
    position: absolute;
    opacity: 0;
    width: 0;

    &:focus + label {
      box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

interface PaymentMethodLabelProps {
  selected: boolean;
}

export const PaymentMethodLabel = styled.label<PaymentMethodLabelProps>`
  width: 100%;
  background: ${(props) => props.theme["base-button"]};
  padding: 1rem 0;
  border-radius: 6px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s;
  cursor: pointer;

  svg {
    margin-left: 1rem;
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  ${(props) =>
    props.selected &&
    css`
      background: ${props.theme["purple-light"]};
      border-color: ${props.theme.purple};

      &:hover {
        background: ${(props) => props.theme["purple-light"]};
      }
    `}
`;

export const CartInfo = styled.div`
  flex: 1;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CartCard = styled(BaseCard)`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CoffeeItem = styled.div`
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

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    font-size: 0.875rem;
    line-height: 130%;
    display: flex;
    justify-content: space-between;

    &:last-child {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
    }
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
  border-radius: 6px;
  border: 0;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
