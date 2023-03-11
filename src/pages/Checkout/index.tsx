import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import { CartContext } from "../../contexts/CartContext";
import { CoffeeItem } from "./components/CoffeeItem";

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
  TotalPriceContainer,
  ConfirmButton,
} from "./styles";

interface FormInputs {
  zipcode: string;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  payment: "credit" | "debit" | "money";
}

export const Checkout = () => {
  const { orderItems } = useContext(CartContext);
  const { register, handleSubmit, watch } = useForm<FormInputs>();
  const theme = useTheme();
  const navigate = useNavigate();

  const selectedPaymentMethod = watch("payment");

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 3.5;
  const total = subtotal + shipping;

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                <input
                  type="text"
                  className="mid"
                  placeholder="ZIP Code"
                  {...register("zipcode")}
                />
              </AddressInputsWrapper>
              <AddressInputsWrapper>
                <input
                  type="text"
                  placeholder="Street"
                  {...register("street")}
                />
              </AddressInputsWrapper>
              <AddressInputsWrapper>
                <input
                  type="text"
                  className="mid"
                  placeholder="Number"
                  {...register("number")}
                />
                <OptionalInputContainer>
                  <input
                    type="text"
                    placeholder="Complement"
                    {...register("complement")}
                  />
                </OptionalInputContainer>
              </AddressInputsWrapper>
              <AddressInputsWrapper>
                <input
                  type="text"
                  className="mid"
                  placeholder="Neighborhood"
                  {...register("neighborhood")}
                />
                <input type="text" placeholder="City" {...register("city")} />
                <input
                  type="text"
                  className="short"
                  placeholder="State"
                  {...register("state")}
                />
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
                value="credit"
                {...register("payment")}
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
                value="debit"
                {...register("payment")}
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
                value="money"
                {...register("payment")}
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
              <CoffeeItem key={item.name + index} item={item} />
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

            <ConfirmButton type="submit">PLACE ORDER</ConfirmButton>
          </CartCard>
        </CartInfo>
      </Container>
    </form>
  );
};
