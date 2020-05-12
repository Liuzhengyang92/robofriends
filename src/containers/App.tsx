import React from 'react';
import { connect } from 'react-redux';
import { IRootReducerState, IRobot } from '../reducers/reducer';
import './App.css';

import { setSearchField, requestRobots } from '../reducers/actions';
import MainPage from '../components/MainPage';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface IAppProps {
}

interface IAppState {
  robots: Array<IRobot>;
  searchField: string
}

// interface RootState {

// }

 class App extends React.Component<IAppProps, IAppState> {
   render() {
     return (<MainPage {...this.props}/>);
  }
};

const mapStateToProps = (state: IRootReducerState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => dispatch(setSearchField(event.currentTarget.value)),
    // onRequestRobots: () => requestRobots(dispatch)
    //another way to dispatch request Robots(use high order function)
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);