import { ADD_TO_CART } from 'redux/types';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const goods = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      /* eslint prefer-spread: "off" */
      const allCards = [].concat.apply([], Object.values(newItems));
      const totalPrice = allCards.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allCards.length,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default goods;
