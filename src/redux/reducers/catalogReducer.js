import { DATA_CATALOG } from 'redux/types';

const initialState = {
  catalog: [],
};

const catalog = (state = initialState, action) => {
  switch (action.type) {
    case DATA_CATALOG:
      return {
        ...state,
        catalog: action.payload,
      };
    default:
      return state;
  }
};

export default catalog;
