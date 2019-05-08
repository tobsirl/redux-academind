import { STORE_RESULT, DELETE_RESULT } from './types';

export const storeResult = result => async dispatch => {
  dispatch({ type: STORE_RESULT, result: result });
};

export const deleteResult = resultElid => {
  return {
    type: DELETE_RESULT,
    resultElid: resultElid
  };
};
