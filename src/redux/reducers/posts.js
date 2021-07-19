const initialState = {
  id: 0,
};

const posts = (state = initialState, action) => {
  if (action.type === 'SAVE_POST_ID') {
    return {
      ...state,
      id: action.payload,
    };
  }
  return state;
};

export default posts;
