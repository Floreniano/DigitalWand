import {
  ADD_TO_CART,
  MINUS_CART_ITEM,
  PLUS_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_CART,
} from 'redux/types';

const initialState = {
  items: [],
  totalCount: 0,
  subTotalPrice: 0,
  tax: 0,
  totalPrice: 0,
  totalPriceWithDiscount: 0,
};

const getSubTotal = (arr, factor) => arr.reduce((sum, obj) => obj.price * factor + sum, 0);

const getTotalDiscount = (price) => {
  let totalPriceWithDiscount = 0;
  if (price > 1000) {
    totalPriceWithDiscount = Math.round(price - price * 0.05);
  }
  return totalPriceWithDiscount;
};

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
      const totalPrice = subTotalPrice + tax;
      return {
        ...state,
        items: newItems,
        totalCount,
        subTotalPrice,
        tax,
        totalPrice,
        totalPriceWithDiscount: getTotalDiscount(totalPrice),
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
      const subTotalPrice = getTotalSum(newItems, 'subTotalPrice');
      const tax = getTotalSum(newItems, 'tax');
      const totalPrice = subTotalPrice + tax;
      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - currentTotalCount,
        subTotalPrice: state.subTotalPrice - currentTotalPrice,
        tax: state.tax - currentTotalTax,
        totalPrice: state.totalPrice - currentTotalTax - currentTotalPrice,
        totalPriceWithDiscount: getTotalDiscount(totalPrice),
      };
    }
    case PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          subTotalPrice: getSubTotal(newObjItems, 1),
          tax: Math.round(getSubTotal(newObjItems, 0.17)),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const subTotalPrice = getTotalSum(newItems, 'subTotalPrice');
      const tax = getTotalSum(newItems, 'tax');
      const totalPrice = subTotalPrice + tax;

      return {
        ...state,
        items: newItems,
        totalCount,
        subTotalPrice,
        tax,
        totalPrice,
        totalPriceWithDiscount: getTotalDiscount(totalPrice),
      };
    }

    case MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems = oldItems.length > 1
        ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          subTotalPrice: getSubTotal(newObjItems, 1),
          tax: Math.round(getSubTotal(newObjItems, 0.17)),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const subTotalPrice = getTotalSum(newItems, 'subTotalPrice');
      const tax = getTotalSum(newItems, 'tax');
      const totalPrice = subTotalPrice + tax;
      // let totalPriceWithDiscount = 0;
      // if (totalPrice > 1000) {
      //   totalPriceWithDiscount = Math.round(totalPrice - totalPrice * 0.05);
      // }

      return {
        ...state,
        items: newItems,
        totalCount,
        subTotalPrice,
        tax,
        totalPrice,
        totalPriceWithDiscount: getTotalDiscount(totalPrice),
      };
    }
    case CLEAR_CART:
      return { totalPrice: 0, totalCount: 0, items: {} };
    default:
      return state;
  }
};

export default goods;
