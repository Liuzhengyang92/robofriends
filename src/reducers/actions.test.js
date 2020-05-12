import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
// import axios from 'axios';
// import moxios from 'moxios';
// import { mockData } from './test/actionsMockData';
// import thunk from 'redux-thunk';
// import { storeFactory } from './test/testUtils';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('handles requesting robots API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});








// const middlewares = [thunk];
// const mockStore1 = configureMockStore(middlewares);
// describe('AsyncActions', () => {
//   it('handles requesting robots API', () => {
//     beforeEach(() => {
//       moxios.install(axios);
//     });
//     afterEach(() => {
//       moxios.uninstall(axios);
//     });
//     const store = mockStore1(storeFactory());
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: mockData,
//       });
//     });

//     return store.dispatch(actions.requestRobots())
//       .then(() => {
//         const newState =  store.getState();
//         expect(newState.mockData).toEqual(mockData);
//       });
//   });
// });