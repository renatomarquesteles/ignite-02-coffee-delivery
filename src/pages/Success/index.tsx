import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation } from "react-router-dom";

import deliveryGuyImage from "../../assets/delivery-guy.png";
import { Tag } from "../../components/Tag";

import { Container, Content, Summary, TextGroup, Title } from "./styles";

interface OrderInfo {
  address: {
    street: string;
    number: number;
    city: string;
    state: string;
  };
  payment: "credit" | "debit" | "money";
}

export const Success = () => {
  const location = useLocation();
  const orderInfo = location.state as OrderInfo;

  return (
    <Container>
      <Content>
        <Title>
          <h1>Yay! Order confirmed</h1>
          <p>Your coffee will arrive soon.</p>
        </Title>

        <Summary>
          <div>
            <Tag color="purple" iconVariant>
              <MapPin size={16} color="white" weight="fill" />
            </Tag>
            <TextGroup>
              <p>
                Delivery at{" "}
                <span>
                  {orderInfo.address.number} {orderInfo.address.street}
                </span>
              </p>
              <p>
                {orderInfo.address.city},{" "}
                {orderInfo.address.state.toUpperCase()}
              </p>
            </TextGroup>
          </div>

          <div>
            <Tag color="yellow" iconVariant>
              <Timer size={16} color="white" weight="fill" />
            </Tag>
            <TextGroup>
              <p>Estimated delivery time</p>
              <p>
                <span>20 - 30 mins</span>
              </p>
            </TextGroup>
          </div>

          <div>
            <Tag color="yellow-dark" iconVariant>
              <CurrencyDollar size={16} color="white" />
            </Tag>
            <TextGroup>
              <p>Payment on delivery</p>
              <p>
                <span>
                  {
                    {
                      credit: "Credit Card",
                      debit: "Debit Card",
                      money: "Money",
                    }[orderInfo.payment]
                  }
                </span>
              </p>
            </TextGroup>
          </div>
        </Summary>
      </Content>

      <div>
        <img src={deliveryGuyImage} alt="" />
      </div>
    </Container>
  );
};
