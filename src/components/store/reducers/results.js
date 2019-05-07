import { STORE_RESULT, DELETE_RESULT } from '../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElid
      );
      return { ...state, results: updatedArray };
    default:
      return state;
  }
};

export default reducer;
