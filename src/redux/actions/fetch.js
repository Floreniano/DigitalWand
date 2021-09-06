import { request } from 'api/api.js';
import { hideLoader, showLoader } from './loader';

export function fetchItems(url, method, actionType) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await request(url, method);
      let json = response;
      if (url === '/api/catalog') {
        json = response[0].data;
      }
      dispatch({
        type: actionType,
        payload: json,
      });
      setTimeout(() => {
        dispatch(hideLoader());
      }, 500);
    } catch (err) {
      dispatch(hideLoader());
      /* eslint-disable no-console */
      console.log('ERROR: ', err);
    }
  };
}
