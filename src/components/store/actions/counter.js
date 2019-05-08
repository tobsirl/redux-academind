import { INCREMENT, DECREMENT, ADD, SUB } from './types';

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

export const add = value => {
  return {
    type: ADD,
    value: value
  };
};

export const sub = value => {
  return {
    type: SUB,
    value: value
  };
};
