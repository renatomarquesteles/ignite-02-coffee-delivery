import { NavLink, useNavigate } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { CartButton } from "../CartButton";
import logoImg from "../../assets/logo.svg";

import { Container, Info, Location } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>

      <Info>
        <Location>
          <MapPin size={22} weight="fill" />
          New York, NY
        </Location>
        <CartButton type="button" onClick={() => navigate("/checkout")}>
          <ShoppingCart size={20} weight="fill" />
        </CartButton>
      </Info>
    </Container>
  );
};
