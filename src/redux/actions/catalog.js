import { DATA_CATALOG } from 'redux/types';
import { fetchItems } from './fetch';

export function dataCatalog() {
  return fetchItems('/api/catalog', DATA_CATALOG);
}
