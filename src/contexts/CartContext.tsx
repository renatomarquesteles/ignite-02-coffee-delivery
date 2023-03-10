import { createContext, ReactNode, useState } from "react";

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  orderItems: CartItem[];
  addCoffeeToCart: (coffee: Coffee, quantity: number) => void;
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
        id: coffee.id,
        name: coffee.name,
        price: coffee.price,
        image: coffee.image,
        quantity,
      },
    ]);
  };

  return (
    <CartContext.Provider value={{ orderItems, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
};
