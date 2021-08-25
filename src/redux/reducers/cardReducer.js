import { DATA_CARD } from 'redux/types';

const initialState = {
  card: [],
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case DATA_CARD:
      return {
        ...state,
        card: action.payload,
      };
    default:
      return state;
  }
};

export default card;
