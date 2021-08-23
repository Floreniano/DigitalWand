import { DATA_PRODUCT } from 'redux/types';
import { fetchItems } from './fetch';

export default function dataProduct() {
  return fetchItems('/api/product', DATA_PRODUCT);
}
