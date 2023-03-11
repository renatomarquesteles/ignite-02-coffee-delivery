import { useContext } from "react";
import { Trash } from "phosphor-react";

import { QuantityInput } from "../../../../components/QuantityInput";
import { CartContext } from "../../../../contexts/CartContext";

import {
  CoffeeItemWrapper,
  Container,
  OptionsContainer,
  RemoveButton,
} from "./styles";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CoffeeItemProps {
  item: CartItem;
}

export const CoffeeItem = ({ item }: CoffeeItemProps) => {
  const { updateItemQuantity } = useContext(CartContext);

  const handleAddQuantity = () => {
    if (item.quantity >= 99) return;

    updateItemQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity <= 1) return;

    updateItemQuantity(item.id, item.quantity - 1);
  };

  return (
    <Container>
      <img src={item.image} alt="" />

      <CoffeeItemWrapper>
        <span>{item.name}</span>

        <OptionsContainer>
          <QuantityInput
            quantity={item.quantity}
            onPlusClick={() => handleAddQuantity()}
            onMinusClick={() => handleDecreaseQuantity()}
            min={1}
            max={99}
          />

          <RemoveButton>
            <Trash size={16} />
            REMOVE
          </RemoveButton>
        </OptionsContainer>
      </CoffeeItemWrapper>

      <span>$ {(item.price * item.quantity).toFixed(2)}</span>
    </Container>
  );
};
