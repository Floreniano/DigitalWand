import { request } from 'api/api.js';

export function fetchItems(url, actionType) {
  return async (dispatch) => {
    try {
      const response = await request(url);
      let json = response[0].data;
      if (url === '/api/users') {
        json = response;
      }
      dispatch({
        type: actionType,
        payload: json,
      });
    } catch (err) {
      /* eslint-disable no-console */
      console.log('ERROR: ', err);
    }
  };
}
