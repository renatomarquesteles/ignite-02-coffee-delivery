interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export enum OrderActionsTypes {
  ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART",
  UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export const addCoffeeToCartAction = (coffee: Coffee, quantity: number) => {
  return {
    type: OrderActionsTypes.ADD_COFFEE_TO_CART,
    payload: { coffee, quantity },
  };
};

export const updateItemQuantityAction = (itemId: string, quantity: number) => {
  return {
    type: OrderActionsTypes.UPDATE_ITEM_QUANTITY,
    payload: { itemId, quantity },
  };
};

export const removeItemAction = (itemId: string) => {
  return {
    type: OrderActionsTypes.REMOVE_ITEM,
    payload: { itemId },
  };
};
