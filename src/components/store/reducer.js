import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUB,
  STORE_RESULT,
  DELETE_RESULT
} from './actions';

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ADD:
      return { ...state, counter: state.counter + action.value };
    case SUB:
      return { ...state, counter: state.counter - action.value };
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
