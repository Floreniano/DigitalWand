import { DATA_USERS } from 'redux/types';
import { fetchItems } from './fetch';

export default function dataUsers() {
  return fetchItems('/api/users', DATA_USERS);
}
