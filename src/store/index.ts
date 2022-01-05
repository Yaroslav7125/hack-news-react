import { createStore } from 'redux';

interface News {
    name: string,
    id: number,
};

interface Action {
    type: string,
    payload: News[]
};

const defaultState: News[] = [];
const reducer = (state = defaultState, action: Action) => {
    switch(action.type) {
        case 'SET_NEWS':
            return [...action.payload];
        default:
            return state;
    }
};


export const store = createStore(reducer);
