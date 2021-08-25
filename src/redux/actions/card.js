import { DATA_CARD } from 'redux/types';
import { fetchItems } from './fetch';

export function dataProduct(id) {
  return fetchItems(`/api/catalog/${id}`, DATA_CARD);
}
