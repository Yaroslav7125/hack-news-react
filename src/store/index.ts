import { createStore } from 'redux';

export interface INews {
  id: number;
  title: string;
  points: number;
  time_ago: string;
  user: string;
  url: string;
}

interface Action {
  type: 'SET_NEWS';
  payload: INews[];
}

const defaultState: INews[] = [];
const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return [...action.payload];
    default:
      return state;
  }
};

export const store = createStore(reducer);
