import { DATA_PRODUCT } from 'redux/types';
import { data } from 'data/product.json';
import { dataItems } from './data';

export default function dataProduct() {
  return dataItems(data, DATA_PRODUCT);
}
