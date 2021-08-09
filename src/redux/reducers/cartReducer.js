import { ADD_TO_CART, REMOVE_CART_ITEM } from 'redux/types';

const initialState = {
  items: [],
  totalCount: 0,
  subTotalPrice: 0,
  tax: 0,
  totalPrice: 0,
};

const getSubTotal = (arr, factor) => arr.reduce((sum, obj) => obj.price * factor + sum, 0);

const get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => val[key], obj[firstKey]);
};

const getTotalSum = (obj, path) => Object.values(obj).reduce((sum, obj1) => {
  const value = get(obj1, path);
  return sum + value;
}, 0);

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
          subTotalPrice: getSubTotal(currentCardsItems, 1),
          tax: Math.round(getSubTotal(currentCardsItems, 0.17)),
        },
      };
      const totalCount = getTotalSum(newItems, 'items.length');
      const subTotalPrice = getTotalSum(newItems, 'subTotalPrice');
      const tax = getTotalSum(newItems, 'tax');
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
