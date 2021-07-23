import { SHOW_LOADER, HIDE_LOADER, SHOW_ERROR } from 'redux/types';

const initialState = {
  loading: false,
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
