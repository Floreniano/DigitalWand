import { hideLoader, showLoader } from 'redux/actions/loader';

export function dataItems(data, actionType) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      dispatch({
        type: actionType,
        payload: data,
      });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(hideLoader());
    }
  };
}
