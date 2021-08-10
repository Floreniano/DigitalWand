export function dataItems(data, actionType) {
  return (dispatch) => {
    dispatch({
      type: actionType,
      payload: data,
    });
  };
}
