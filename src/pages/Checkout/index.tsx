import { MapPinLine } from "phosphor-react";

import {
  AddressCard,
  AddressCardDescription,
  AddressInputs,
  AddressInputsWrapper,
  CartCard,
  CartInfo,
  Container,
  CustomerInfo,
  PaymentCard,
  Subtitle,
} from "./styles";

export const Checkout = () => {
  return (
    <Container>
      <CustomerInfo>
        <Subtitle>Complete your order</Subtitle>

        <AddressCard>
          <AddressCardDescription>
            <MapPinLine size={22} />
            <div>
              <h2>Shipping Address</h2>
              <p>
                Enter the address where you would like to receive your order
              </p>
            </div>
          </AddressCardDescription>

          <AddressInputs>
            <AddressInputsWrapper>
              <input type="text" className="mid" placeholder="ZIP Code" />
            </AddressInputsWrapper>
            <AddressInputsWrapper>
              <input type="text" placeholder="Street" />
            </AddressInputsWrapper>
            <AddressInputsWrapper>
              <input type="text" className="mid" placeholder="Number" />
              <input type="text" placeholder="Complement" />
            </AddressInputsWrapper>
            <AddressInputsWrapper>
              <input type="text" className="mid" placeholder="Neighborhood" />
              <input type="text" placeholder="City" />
              <input type="text" className="short" placeholder="State" />
            </AddressInputsWrapper>
          </AddressInputs>
        </AddressCard>

        <PaymentCard>PaymentMethod</PaymentCard>
      </CustomerInfo>

      <CartInfo>
        <Subtitle>Selected coffees</Subtitle>

        <CartCard>Cart</CartCard>
      </CartInfo>
    </Container>
  );
};
