import { FETCH_POSTS, SAVE_POST_ID } from 'redux/types';
import { fetchItems } from './fetch';

export const savePostId = (id) => ({
  type: SAVE_POST_ID,
  payload: id,
});

export function fetchPosts() {
  return fetchItems('posts?_limit=10', FETCH_POSTS);
}
