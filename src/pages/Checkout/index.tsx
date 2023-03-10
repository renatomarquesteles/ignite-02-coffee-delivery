import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import { QuantityInput } from "../../components/QuantityInput";
import { CartContext } from "../../contexts/CartContext";

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
  const { orderItems } = useContext(CartContext);
  const theme = useTheme();
  const navigate = useNavigate();

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 3.5;
  const total = subtotal + shipping;

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
          {orderItems.map((item, index) => (
            <CoffeeItem key={item.name + index}>
              <img src={item.image} alt="" />

              <CoffeeItemWrapper>
                <span>{item.name}</span>

                <OptionsContainer>
                  <QuantityInput
                    quantity={item.quantity}
                    onPlusClick={() => {}}
                    onMinusClick={() => {}}
                    min={1}
                    max={99}
                  />

                  <RemoveButton>
                    <Trash size={16} />
                    REMOVE
                  </RemoveButton>
                </OptionsContainer>
              </CoffeeItemWrapper>

              <span>$ {item.price.toFixed(2)}</span>
            </CoffeeItem>
          ))}

          <TotalPriceContainer>
            <div>
              <span>Subtotal</span>
              <span>$ {subtotal.toFixed(2)}</span>
            </div>
            <div>
              <span>Shipping</span>
              <span>$ {shipping.toFixed(2)}</span>
            </div>
            <div>
              <span>Total</span>
              <span>$ {total.toFixed(2)}</span>
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
