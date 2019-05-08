export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';



export const storeResult = result => async dispatch => {
  // return {
  //   type: STORE_RESULT,
  //   result: result
  // };
  dispatch({ type: STORE_RESULT, result: result });
};

export const deleteResult = resultElid => {
  return {
    type: DELETE_RESULT,
    resultElid: resultElid
  };
};
