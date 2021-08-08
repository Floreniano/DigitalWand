import { DATA_CATALOG } from 'redux/types';
import { data } from 'data/catalog.json';
import { dataItems } from './data';

export function dataCatalog() {
  return dataItems(data, DATA_CATALOG);
}
