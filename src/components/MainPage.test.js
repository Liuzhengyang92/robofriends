import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage { ...mockProps } />);
});
// it('expect to render App component', () => {
//   const mockStore = {
//     robots: [],
//     searchField: ''
//   };
//   expect(shallow(<MainPage store={mockStore} />)).toMatchSnapshot();
// });

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }]);
  // expect(wrapper2.instance().filterRobots()).toEqual([]);
  // expect(wrapper.instance().filterRobots(mockProps.robots))
});


it('filters robots correctly2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  };
  const filterRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filterRobots);
});

const mockProps4 = {
  onRequestRobots: jest.fn(),
  robots: [],
  searchField: '',
  isPending: true
};
const wrapper4= shallow(<MainPage {...mockProps4} />);

it('test isPending is true', () => {
  expect(wrapper4).toMatchSnapshot();
});