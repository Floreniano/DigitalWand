import { ADD_TO_CART, REMOVE_CART_ITEM } from 'redux/types';

const initialState = {
  items: [],
  totalCount: 0,
  subTotalPrice: 0,
  tax: 0,
  totalPrice: 0,
};

const getSubTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
const getSubTotalTax = (arr) => arr.reduce((sum, obj) => obj.price * 0.17 + sum, 0);

const goods = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const currentCardsItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      // Новые товары
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentCardsItems,
          subTotalPrice: getSubTotalPrice(currentCardsItems),
          tax: getSubTotalTax(currentCardsItems),
        },
      };
      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const subTotalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].subTotalPrice + sum,
        0,
      );
      const tax = Object.keys(newItems).reduce((sum, key) => newItems[key].tax + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount,
        subTotalPrice,
        tax,
        totalPrice: subTotalPrice + tax,
      };
    }
    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const currentTotalCount = newItems[action.payload].items.length;
      const currentTotalPrice = newItems[action.payload].subTotalPrice;
      const currentTotalTax = newItems[action.payload].tax;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - currentTotalCount,
        subTotalPrice: state.subTotalPrice - currentTotalPrice,
        tax: state.tax - currentTotalTax,
        totalPrice: state.totalPrice - currentTotalTax - currentTotalPrice,
      };
    }

    default:
      return state;
  }
};

export default goods;
