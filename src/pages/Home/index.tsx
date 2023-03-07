import { MapPin, ShoppingCart } from "phosphor-react";

import logoImg from "../../assets/logo.svg";
import { CartButton } from "../../components/CartButton";

import { Header, Info, Location, Page } from "./styles";

export const Home = () => {
  return (
    <Page>
      <Header>
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
      </Header>
    </Page>
  );
};
