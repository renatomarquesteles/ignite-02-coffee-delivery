import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
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
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [orderItems, setOrderItems] = useState<CartItem[]>(() => {
    const storedItems = localStorage.getItem(
      "@coffee-delivery:order-items-1.0.0"
    );

    if (storedItems) {
      return JSON.parse(storedItems);
    }

    return [];
  });

  // Updates order items data on local storage
  useEffect(() => {
    localStorage.setItem(
      "@coffee-delivery:order-items-1.0.0",
      JSON.stringify(orderItems)
    );
  }, [orderItems]);

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

    toast.success(
      <>
        <strong style={{ marginRight: 4 }}>{coffee.name}</strong> added to your
        cart!
      </>
    );
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    setOrderItems((state) =>
      state.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const removeItem = (itemId: string) => {
    setOrderItems((state) => state.filter((item) => item.id !== itemId));

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
