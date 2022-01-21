import { createStore } from 'redux';
import { News } from '../types';

interface Action {
  type: 'SET_NEWS';
  payload: News[];
}

const defaultState: News[] = [];
const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return [...action.payload];
    default:
      return state;
  }
};

export const store = createStore(reducer);
