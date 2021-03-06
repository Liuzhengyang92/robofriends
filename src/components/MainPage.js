import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends React.Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_SAY_HI);
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase());
    });
  }

  render() {
    const { onSearchChange, robots, isPending } = this.props;
    
    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading...</h1> :
            <ErrorBoundary>
              <CardList robots={this.filterRobots(robots)} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
};

export default MainPage;