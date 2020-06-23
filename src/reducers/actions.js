import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

import axios from 'axios';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => {
  return (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    // return axios.get('https://jsonplaceholder.typicode.com/users')
    return axios({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get'
    })
    .then(data => {
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data.data });
    })
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
  };
  // export const requestRobots = (dispatch) => {
};

// export const requestRobots = () => (dispatch) => {
// // export const requestRobots = (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
//   apiCall('https://jsonplaceholder.typicode.com/users')
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
// };


//another way to do do request Robots: 
// export const requestRobots = () => (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
// };