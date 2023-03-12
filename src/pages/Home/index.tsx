import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import coffeeCupImg from "../../assets/coffee-cup.png";
import { Tag } from "../../components/Tag";
import { CoffeeCard } from "./components/CoffeeCard";

import { Benefits, CoffeeList, Introduction, Menu } from "./styles";

import database from "../../database/mock.json";

const coffeeList = database.data;

export const Home = () => {
  return (
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

      <Menu id="coffee">
        <h1>Menu</h1>
        <CoffeeList>
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </Menu>
    </main>
  );
};
