import { v4 as uuidv4 } from "uuid";

import { OrderActionsTypes } from "./actions";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface orderState {
  items: CartItem[];
}

export const orderReducer = (state: orderState, action: any) => {
  switch (action.type) {
    case OrderActionsTypes.ADD_COFFEE_TO_CART:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: uuidv4(),
            name: action.payload.coffee.name,
            price: action.payload.coffee.price,
            image: action.payload.coffee.image,
            quantity: action.payload.quantity,
          },
        ],
      };
    case OrderActionsTypes.UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case OrderActionsTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.itemId),
      };
    case OrderActionsTypes.CLEAR_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
};
