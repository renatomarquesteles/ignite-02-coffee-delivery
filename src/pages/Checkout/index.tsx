import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import coffeeImage from "../../assets/coffees/1.png";
import { QuantityInput } from "../../components/QuantityInput";

import {
  Card,
  Description,
  AddressInputs,
  AddressInputsWrapper,
  CartCard,
  CartInfo,
  Container,
  CustomerInfo,
  Subtitle,
  PaymentMethods,
  PaymentMethodLabel,
  OptionalInputContainer,
  CoffeeItem,
  RemoveButton,
  OptionsContainer,
  CoffeeItemWrapper,
  TotalPriceContainer,
  ConfirmButton,
} from "./styles";

type PaymentMethod = "credit" | "debit" | "money";

export const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod | null>(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const handlePaymentChange = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <Container>
      <CustomerInfo>
        <Subtitle>Complete your order</Subtitle>

        <Card>
          <Description>
            <MapPinLine size={22} color={theme["yellow-dark"]} />
            <div>
              <h2>Shipping Address</h2>
              <p>
                Enter the address where you would like to receive your order
              </p>
            </div>
          </Description>

          <AddressInputs>
            <AddressInputsWrapper>
              <input type="text" className="mid" placeholder="ZIP Code" />
            </AddressInputsWrapper>
            <AddressInputsWrapper>
              <input type="text" placeholder="Street" />
            </AddressInputsWrapper>
            <AddressInputsWrapper>
              <input type="text" className="mid" placeholder="Number" />
              <OptionalInputContainer>
                <input type="text" placeholder="Complement" />
              </OptionalInputContainer>
            </AddressInputsWrapper>
            <AddressInputsWrapper>
              <input type="text" className="mid" placeholder="Neighborhood" />
              <input type="text" placeholder="City" />
              <input type="text" className="short" placeholder="State" />
            </AddressInputsWrapper>
          </AddressInputs>
        </Card>

        <Card>
          <Description>
            <CurrencyDollar size={22} color={theme.purple} />
            <div>
              <h2>Payment Method</h2>
              <p>Payment is made upon delivery. Choose how you want to pay</p>
            </div>
          </Description>

          <PaymentMethods>
            <input
              type="radio"
              id="credit"
              name="credit"
              value="credit"
              checked={selectedPaymentMethod === "credit"}
              onChange={() => handlePaymentChange("credit")}
            />
            <PaymentMethodLabel
              htmlFor="credit"
              selected={selectedPaymentMethod === "credit"}
            >
              <CreditCard size={16} />
              Credit Card
            </PaymentMethodLabel>

            <input
              type="radio"
              id="debit"
              name="debit"
              value="debit"
              checked={selectedPaymentMethod === "debit"}
              onChange={() => handlePaymentChange("debit")}
            />
            <PaymentMethodLabel
              htmlFor="debit"
              selected={selectedPaymentMethod === "debit"}
            >
              <Bank size={16} />
              Debit Card
            </PaymentMethodLabel>

            <input
              type="radio"
              id="money"
              name="money"
              value="money"
              checked={selectedPaymentMethod === "money"}
              onChange={() => handlePaymentChange("money")}
            />
            <PaymentMethodLabel
              htmlFor="money"
              selected={selectedPaymentMethod === "money"}
            >
              <Money size={16} />
              Money
            </PaymentMethodLabel>
          </PaymentMethods>
        </Card>
      </CustomerInfo>

      <CartInfo>
        <Subtitle>Selected coffees</Subtitle>

        <CartCard>
          {Array.from({ length: 3 }).map((_, index) => (
            <CoffeeItem key={index}>
              <img src={coffeeImage} alt="" />

              <CoffeeItemWrapper>
                <span>Traditional Espresso</span>

                <OptionsContainer>
                  <QuantityInput quantity={1} />

                  <RemoveButton>
                    <Trash size={16} />
                    REMOVE
                  </RemoveButton>
                </OptionsContainer>
              </CoffeeItemWrapper>

              <span>$ 9.90</span>
            </CoffeeItem>
          ))}

          <TotalPriceContainer>
            <div>
              <span>Subtotal</span>
              <span>$ 29.70</span>
            </div>
            <div>
              <span>Shipping</span>
              <span>$3.50</span>
            </div>
            <div>
              <span>Total</span>
              <span>$ 33.20</span>
            </div>
          </TotalPriceContainer>

          <ConfirmButton onClick={() => navigate("/success")}>
            PLACE ORDER
          </ConfirmButton>
        </CartCard>
      </CartInfo>
    </Container>
  );
};
