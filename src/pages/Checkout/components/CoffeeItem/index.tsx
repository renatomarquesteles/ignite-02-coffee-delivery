import { Trash } from "phosphor-react";

import { QuantityInput } from "../../../../components/QuantityInput";

import {
  CoffeeItemWrapper,
  Container,
  OptionsContainer,
  RemoveButton,
} from "./styles";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CoffeeItemProps {
  item: CartItem;
}

export const CoffeeItem = ({ item }: CoffeeItemProps) => {
  return (
    <Container>
      <img src={item.image} alt="" />

      <CoffeeItemWrapper>
        <span>{item.name}</span>

        <OptionsContainer>
          <QuantityInput
            quantity={item.quantity}
            onPlusClick={() => {}}
            onMinusClick={() => {}}
            min={1}
            max={99}
          />

          <RemoveButton>
            <Trash size={16} />
            REMOVE
          </RemoveButton>
        </OptionsContainer>
      </CoffeeItemWrapper>

      <span>$ {item.price.toFixed(2)}</span>
    </Container>
  );
};
