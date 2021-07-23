import { FETCH_COMMENTS } from 'redux/types';
import { showError } from 'redux/actions/error';
import { hideLoader, showLoader } from 'redux/actions/loader';

export function fetchComments() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
      const json = await response.json();
      dispatch({
        type: FETCH_COMMENTS,
        payload: json,
      });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError('Ошибка соединения'));
      dispatch(hideLoader());
    }
  };
}
