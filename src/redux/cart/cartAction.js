import { cartType } from "./cartType";

export const toggleCartHidden = () => ({
  type: cartType.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartType.ADD_ITEM,
  payload: item,
});
