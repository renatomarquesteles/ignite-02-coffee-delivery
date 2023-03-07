import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";

import coffeeCupImg from "../../assets/coffee-cup.png";
import logoImg from "../../assets/logo.svg";
import { CartButton } from "../../components/CartButton";
import { Tag } from "../../components/Tag";

import { Benefits, Header, Info, Introduction, Location, Page } from "./styles";

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

      <main>
        <Introduction>
          <div>
            <h1>Find the perfect coffee for any time of day</h1>
            <p>
              With Coffee Delivery, you can get your coffee wherever you are,
              whenever you want.
            </p>

            <Benefits>
              <span>
                <Tag color="yellow-dark" iconVariant>
                  <ShoppingCart size={16} weight="fill" color="white" />
                </Tag>
                Easy and secure shopping
              </span>

              <span>
                <Tag color="base-text" iconVariant>
                  <Package size={16} weight="fill" color="white" />
                </Tag>
                Packaging keeps coffee intact
              </span>

              <span>
                <Tag color="yellow" iconVariant>
                  <Timer size={16} weight="fill" color="white" />
                </Tag>
                Fast and tracked delivery
              </span>

              <span>
                <Tag color="purple" iconVariant>
                  <Coffee size={16} weight="fill" color="white" />
                </Tag>
                Coffee comes fresh to you
              </span>
            </Benefits>
          </div>
          <img src={coffeeCupImg} alt="" />
        </Introduction>
      </main>
    </Page>
  );
};
