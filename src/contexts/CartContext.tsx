import { createContext, ReactNode, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";

import {
  addCoffeeToCartAction,
  removeItemAction,
  updateItemQuantityAction,
} from "../reducers/order/actions";
import { orderReducer } from "../reducers/order/reducer";

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  orderItems: CartItem[];
  addCoffeeToCart: (coffee: Coffee, quantity: number) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

const orderStateStorageKey = "@coffee-delivery:order-state-1.0.0";

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [orderState, dispatch] = useReducer(
    orderReducer,
    { items: [] },
    (initialState) => {
      const storedState = localStorage.getItem(orderStateStorageKey);

      if (storedState) {
        return JSON.parse(storedState);
      }

      return initialState;
    }
  );

  const orderItems = orderState.items;

  // Updates order state data on local storage
  useEffect(() => {
    localStorage.setItem(orderStateStorageKey, JSON.stringify(orderState));
  }, [orderState]);

  const addCoffeeToCart = (coffee: Coffee, quantity: number) => {
    dispatch(addCoffeeToCartAction(coffee, quantity));

    toast.success(
      <>
        <strong style={{ marginRight: 4 }}>{coffee.name}</strong> added to your
        cart!
      </>
    );
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    dispatch(updateItemQuantityAction(itemId, quantity));
  };

  const removeItem = (itemId: string) => {
    dispatch(removeItemAction(itemId));

    toast.error(`Item removed from your cart!`);
  };

  const clearCart = () => {
    setOrderItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        orderItems,
        addCoffeeToCart,
        updateItemQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
