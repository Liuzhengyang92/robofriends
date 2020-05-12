import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

//shallow just render the actually Card component, excluding the other components included in Card.
it('expect to render Card Component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
