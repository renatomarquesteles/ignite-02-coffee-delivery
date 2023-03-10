import { ShoppingCartSimple } from "phosphor-react";

import { IconButton } from "../../../../components/IconButton";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Tag } from "../../../../components/Tag";

import { AddToCart, AddToCartWrapper, Container, Tags } from "./styles";

interface CoffeeCardProps {
  coffee: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
  };
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  return (
    <Container>
      <img src={coffee.image} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>
      <AddToCart>
        <span>${coffee.price.toFixed(2)}</span>

        <AddToCartWrapper>
          <QuantityInput quantity={1} />
          <IconButton type="button">
            <ShoppingCartSimple size={22} weight="fill" />
          </IconButton>
        </AddToCartWrapper>
      </AddToCart>
    </Container>
  );
};
