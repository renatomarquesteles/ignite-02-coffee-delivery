import { Minus, Plus } from "phosphor-react";

import { Container } from "./styles";

interface QuantityInputProps {
  quantity: number;
  onPlusClick: () => void;
  onMinusClick: () => void;
  min?: number;
  max?: number;
}

export const QuantityInput = ({
  quantity,
  onPlusClick,
  onMinusClick,
  min,
  max,
}: QuantityInputProps) => {
  return (
    <Container>
      <button
        type="button"
        onClick={onMinusClick}
        disabled={!!min && quantity <= min}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        onClick={onPlusClick}
        disabled={!!max && quantity >= max}
      >
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  );
};
