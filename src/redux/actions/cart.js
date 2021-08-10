import { ADD_TO_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART } from 'redux/types';

export const addToCart = (obj) => ({
  type: ADD_TO_CART,
  payload: obj,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
});
export const clearCart = () => ({
  type: CLEAR_CART,
});
