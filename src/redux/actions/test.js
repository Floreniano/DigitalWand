import { hideLoader, showLoader } from 'redux/actions/loader';

export function fetchItems(method, url, data = null) {
  return async (dispatch) => {
    try {
      const headers = {};
      let body;

      if (data) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify();
      }
      dispatch(showLoader());
      const response = await fetch(url, { method, headers, body });
      const json = await response.json();
      dispatch({
        payload: json,
      });
      dispatch(hideLoader());
    } catch (e) {
      console.warn('Error', e.message);
      dispatch(hideLoader());
    }
  };
}
