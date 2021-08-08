import { ADD_TO_CART, REMOVE_CART_ITEM } from 'redux/types';

export const addToCart = (obj) => ({
  type: ADD_TO_CART,
  payload: obj,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});
