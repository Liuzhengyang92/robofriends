import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

 const App = () => {
   const [searchResults, setSearchResults] = useState([]);
   const searchField = useSelector(state => state.searchRobots.searchField);
   const isPending = useSelector(state => state.requestRobots.isPending);
   const robotsUsers = useSelector(state => state.requestRobots.robots);
   const dispatch = useDispatch();

   const onSearchChange = (e) => {
     dispatch(setSearchField(e.target.value));
   };

   useEffect(() => {
     requestRobots(dispatch);
   }, [dispatch]);

   useEffect(() => {
     let filteredRobots = robotsUsers.filter(robot => {
       return(
         robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
       );
     });
     setSearchResults(filteredRobots);
   }, [searchField, robotsUsers]);

   return isPending ?
     <h1>Loading...</h1> :
     (
       <div className='tc'>
         <h1 className='f1'>RoboFriends</h1>
         <SearchBox searchChange={onSearchChange} />
         <Scroll>
           <ErrorBoundary>
             <CardList robots={searchResults} />
           </ErrorBoundary>
         </Scroll>
       </div>
     );
};

export default App;