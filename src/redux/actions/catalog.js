import { DATA_CATALOG } from 'redux/types';
import { data } from 'data/catalog.json';
import { dataItems } from './data';

// import { fetchItems } from './test';

export function dataCatalog() {
  // return fetchItems('GET', '/api/v1/catalog');
  return dataItems(data, DATA_CATALOG);
}
