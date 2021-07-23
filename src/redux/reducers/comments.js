import { FETCH_COMMENTS } from 'redux/types';

const initialState = {
  fetchedComments: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        fetchedComments: action.payload,
      };
    default:
      return state;
  }
};

export default comments;
