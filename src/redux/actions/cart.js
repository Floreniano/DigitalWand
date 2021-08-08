import { ADD_TO_CART, REMOVE_FROM_CART } from 'redux/types';

export const addToCart = (obj) => ({
  type: ADD_TO_CART,
  payload: obj,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
