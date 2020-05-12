import { createStore, combineReducers } from 'redux';

import { searchRobots, requestRobots } from '../reducer';

const rootReducer = combineReducers({ searchRobots, requestRobots });

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
