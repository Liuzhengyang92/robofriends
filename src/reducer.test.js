import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

import * as reducers from './reducer';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  };
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({ 
      searchField: 'abc' 
    });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ''
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOT_PENDING action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING,
      payload: { isPending: true }
    })).toEqual({
      isPending: true,
      robots: [],
      error: ''
    });
  });

  it('should handle REQUEST_ROBOT_SUCCESS action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        name: 'john',
        id: '123',
        email: 'test@gmail.com'
      }],
    })).toEqual({
      isPending: false,
      robots: [{
        name: 'john',
        id: '123',
        email: 'test@gmail.com'
      }],
      error: ''
    });
  });

  it('should handle REQUEST_ROBOT_FAILED action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'NOOOOOO!!!!',
    })).toEqual({
      isPending: false,
      robots: [],
      error: 'NOOOOOO!!!!'
    });
  });
});
