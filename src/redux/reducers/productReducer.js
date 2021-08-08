import { DATA_PRODUCT } from 'redux/types';

const initialState = {
  product: [],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case DATA_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default product;
