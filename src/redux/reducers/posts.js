import { FETCH_POSTS, SAVE_POST_ID } from 'redux/types';

const initialState = {
  id: 0,
  fetchedPosts: [],
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST_ID:
      return {
        ...state,
        id: action.payload,
      };
    case FETCH_POSTS:
      return {
        ...state,
        fetchedPosts: action.payload,
      };
    default:
      return state;
  }
};

export default posts;
