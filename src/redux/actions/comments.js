import { FETCH_COMMENTS } from 'redux/types';
import { fetchItems } from './fetch';

export function fetchComments() {
  return fetchItems('comments?postId=1', FETCH_COMMENTS);
}
