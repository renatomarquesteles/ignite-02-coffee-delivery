import { Minus, Plus } from "phosphor-react";

import { Container } from "./styles";

interface QuantityInputProps {
  quantity: number;
}

export const QuantityInput = ({ quantity }: QuantityInputProps) => {
  return (
    <Container>
      <button type="button">
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  );
};
