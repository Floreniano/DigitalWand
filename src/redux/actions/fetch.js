import { request } from 'api/api.js';
import { hideLoader, showLoader } from './loader';

export function fetchItems(url, actionType) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await request(url);
      let json = response;
      if (url === '/api/catalog') {
        json = response[0].data;
      }
      dispatch({
        type: actionType,
        payload: json,
      });
      dispatch(hideLoader());
    } catch (err) {
      dispatch(hideLoader());
      /* eslint-disable no-console */
      console.log('ERROR: ', err);
    }
  };
}
