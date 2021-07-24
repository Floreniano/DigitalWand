import { FETCH_POSTS, SAVE_POST_ID } from 'redux/types';
import { hideLoader, showLoader } from 'redux/actions/loader';
import { showError } from 'redux/actions/error';

export const savePostId = (id) => ({
  type: SAVE_POST_ID,
  payload: id,
});

export function fetchPosts() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=100');
      const json = await response.json();
      dispatch({
        type: FETCH_POSTS,
        payload: json,
      });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError('Ошибка соединения'));
      dispatch(hideLoader());
    }
  };
}
