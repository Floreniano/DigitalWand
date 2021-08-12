import { DATA_USERS } from 'redux/types';

const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case DATA_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default users;
