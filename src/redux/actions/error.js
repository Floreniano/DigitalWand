import { SHOW_ERROR } from 'redux/types';

export function showError(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ERROR,
      payload: text,
    });
  };
}
