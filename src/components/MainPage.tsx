import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends React.Component<any> {
  componentDidMount() {
    console.log(this.props);
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter((robot: any) => {
      return robot.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase());
    });
  }

  render() {
    const { onSearchChange, isPending } = this.props;
    
    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading...</h1> :
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
};

export default MainPage;