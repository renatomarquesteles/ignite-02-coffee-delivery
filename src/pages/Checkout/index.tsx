import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
  InputErrorMessage,
  InputErrorWrapper,
  AddressInput,
  ItemsList,
} from "./styles";

interface CheckoutFormData {
  address: {
    zipcode: string;
    street: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  payment: "credit" | "debit" | "money";
  orderItems: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
}

const checkoutInfoSchema = z
  .object({
    address: z
      .object({
        zipcode: z.string().nonempty("This field is required"),
        street: z.string().nonempty("This field is required"),
        number: z
          .number({ invalid_type_error: "Invalid number" })
          .int("Invalid number")
          .min(1, "Invalid number")
          .max(9999, "Invalid number"),
        complement: z.string().nullable(),
        neighborhood: z.string().nonempty("This field is required"),
        city: z.string().nonempty("This field is required"),
        state: z.string().nonempty("This field is required"),
      })
      .required(),
    payment: z.enum(["credit", "debit", "money"]),
    orderItems: z
      .array(
        z.object({
          id: z.string(),
          name: z.string(),
          price: z.number(),
          image: z.string(),
          quantity: z.number().min(1).max(99),
        })
      )
      .nonempty("Cart is empty"),
  })
  .required();

export const Checkout = () => {
  const { orderItems } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutInfoSchema),
    defaultValues: {
      orderItems: orderItems,
    },
  });
  const theme = useTheme();
  const navigate = useNavigate();

  const selectedPaymentMethod = watch("payment");

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 3.5;
  const total = subtotal + shipping;

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
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
                <InputErrorWrapper
                  className="mid"
                  error={!!errors.address?.zipcode}
                >
                  <AddressInput
                    type="text"
                    placeholder="ZIP Code"
                    {...register("address.zipcode")}
                  />
                  <InputErrorMessage>
                    {errors.address?.zipcode?.message &&
                      errors.address?.zipcode?.message}
                  </InputErrorMessage>
                </InputErrorWrapper>
              </AddressInputsWrapper>
              <AddressInputsWrapper>
                <InputErrorWrapper error={!!errors.address?.zipcode}>
                  <AddressInput
                    type="text"
                    placeholder="Street"
                    {...register("address.street")}
                  />
                  <InputErrorMessage>
                    {errors.address?.street?.message &&
                      errors.address?.street?.message}
                  </InputErrorMessage>
                </InputErrorWrapper>
              </AddressInputsWrapper>
              <AddressInputsWrapper>
                <InputErrorWrapper
                  className="mid"
                  error={!!errors.address?.number}
                >
                  <AddressInput
                    type="text"
                    placeholder="Number"
                    maxLength={4}
                    {...register("address.number", { valueAsNumber: true })}
                  />
                  <InputErrorMessage>
                    {errors.address?.number?.message &&
                      errors.address?.number?.message}
                  </InputErrorMessage>
                </InputErrorWrapper>
                <OptionalInputContainer>
                  <InputErrorWrapper error={!!errors.address?.complement}>
                    <AddressInput
                      type="text"
                      placeholder="Complement"
                      {...register("address.complement")}
                    />
                    <InputErrorMessage>
                      {errors.address?.complement?.message &&
                        errors.address?.complement?.message}
                    </InputErrorMessage>
                  </InputErrorWrapper>
                </OptionalInputContainer>
              </AddressInputsWrapper>
              <AddressInputsWrapper>
                <InputErrorWrapper
                  className="mid"
                  error={!!errors.address?.neighborhood}
                >
                  <AddressInput
                    type="text"
                    placeholder="Neighborhood"
                    {...register("address.neighborhood")}
                  />
                  <InputErrorMessage>
                    {errors.address?.neighborhood?.message &&
                      errors.address?.neighborhood?.message}
                  </InputErrorMessage>
                </InputErrorWrapper>
                <InputErrorWrapper error={!!errors.address?.city}>
                  <AddressInput
                    type="text"
                    placeholder="City"
                    {...register("address.city")}
                  />
                  <InputErrorMessage>
                    {errors.address?.city?.message &&
                      errors.address?.city?.message}
                  </InputErrorMessage>
                </InputErrorWrapper>
                <InputErrorWrapper
                  className="short"
                  error={!!errors.address?.state}
                >
                  <AddressInput
                    type="text"
                    placeholder="State"
                    maxLength={2}
                    {...register("address.state")}
                  />
                  <InputErrorMessage>
                    {errors.address?.state?.message &&
                      errors.address?.state?.message}
                  </InputErrorMessage>
                </InputErrorWrapper>
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

            <InputErrorWrapper error={!!errors.payment}>
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
              <InputErrorMessage>
                {errors.payment && "Select a payment method"}
              </InputErrorMessage>
            </InputErrorWrapper>
          </Card>
        </CustomerInfo>

        <CartInfo>
          <Subtitle>Selected coffees</Subtitle>

          <CartCard>
            {orderItems.length > 0 ? (
              <>
                <ItemsList>
                  {orderItems.map((item, index) => (
                    <CoffeeItem key={item.name + index} item={item} />
                  ))}
                </ItemsList>

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
              </>
            ) : (
              <>
                <p>Your cart is empty</p>
                <Link to="/#coffee" preventScrollReset>
                  Check out the coffee menu!
                </Link>
              </>
            )}
          </CartCard>
        </CartInfo>
      </Container>
    </form>
  );
};
