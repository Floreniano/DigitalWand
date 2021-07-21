const initialState = {
  id: 0,
  posts: [],
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_POST_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'SET_POST':
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default posts;
