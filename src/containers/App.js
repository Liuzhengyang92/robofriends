import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';

 class App extends React.Component {
   render() {
     return (<MainPage {...this.props}/>);
  }
};

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // onRequestRobots: () => requestRobots(dispatch)
    //another way to dispatch request Robots(use high order function)
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);