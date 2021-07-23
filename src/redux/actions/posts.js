import { FETCH_POSTS, SAVE_POST_ID, SET_POSTS } from 'redux/types';
import { hideLoader, showLoader } from 'redux/actions/loader';

export const savePostId = (id) => ({
  type: SAVE_POST_ID,
  payload: id,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    dispatch({
      type: FETCH_POSTS,
      payload: json,
    });
    dispatch(hideLoader());
  };
}
