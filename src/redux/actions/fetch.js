import { hideLoader, showLoader } from 'redux/actions/loader';
import { showError } from 'redux/actions/error';

export function fetchItems(url, actionType) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      dispatch(showError(''));
      const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
      const json = await response.json();
      dispatch({
        type: actionType,
        payload: json,
      });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError('Ошибка соединения'));
      dispatch(hideLoader());
    }
  };
}
