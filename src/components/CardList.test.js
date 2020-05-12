import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';

//shallow just render the actually Card component, excluding the other components included in Card.
it('expect to render CardList Component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      email: 'john@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});