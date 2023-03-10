import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import deliveryGuyImage from "../../assets/delivery-guy.png";
import { Tag } from "../../components/Tag";

import { Container, Content, Summary, TextGroup, Title } from "./styles";

export const Success = () => {
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
                Delivery at <span>1978 Turkey Pen Road</span>
              </p>
              <p>New York, NY</p>
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
                <span>Credit Card</span>
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
