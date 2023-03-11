import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [orderItems, setOrderItems] = useState<CartItem[]>([]);

  const addCoffeeToCart = (coffee: Coffee, quantity: number) => {
    setOrderItems((state) => [
      ...state,
      {
        id: uuidv4(),
        name: coffee.name,
        price: coffee.price,
        image: coffee.image,
        quantity,
      },
    ]);
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    setOrderItems((state) =>
      state.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{ orderItems, addCoffeeToCart, updateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
