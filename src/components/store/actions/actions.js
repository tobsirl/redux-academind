export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = () => {
  return {
    type: ADD,
    payload: 
  };
};

export const sub = () => {
  return {
    type: SUB
  };
};

export const storeResult = () => {
  return {
    type: STORE_RESULT
  };
};

export const deleteResult = () => {
  return {
    type: DELETE_RESULT
  };
};
