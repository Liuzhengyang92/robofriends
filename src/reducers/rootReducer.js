import { searchRobots, requestRobots } from './reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  searchRobots, requestRobots
});
