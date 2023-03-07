import { MapPin, ShoppingCart } from "phosphor-react";

import { CartButton } from "../CartButton";
import logoImg from "../../assets/logo.svg";

import { Container, Info, Location } from "./styles";

export const Header = () => {
  return (
    <Container>
      <img src={logoImg} alt="" />

      <Info>
        <Location>
          <MapPin size={22} weight="fill" />
          New York, NY
        </Location>
        <CartButton type="button">
          <ShoppingCart size={20} weight="fill" />
        </CartButton>
      </Info>
    </Container>
  );
};
