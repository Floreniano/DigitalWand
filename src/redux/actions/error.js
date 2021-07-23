import { HIDE_ERROR, SHOW_ERROR } from 'redux/types';

export function showError(text) {
  return {
    type: SHOW_ERROR,
    payload: text,
  };
}
export function hideError() {
  return {
    type: HIDE_ERROR,
  };
}
