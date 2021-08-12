import { DATA_USERS } from 'redux/types';
import data from 'data/authorization/authorization.json';
import { dataItems } from './data';

export default function dataUsers() {
  return dataItems(data, DATA_USERS);
}
