import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// import { shallowToJson } from 'enzyme-to-json';

import Stash from './';

// Tutorial: https://medium.com/wehkamp-techblog/unit-testing-your-react-application-with-jest-and-enzyme-81c5545cee45

// test the state of our component by rendering the output and check the state
it('should handle state changes', () => {
  console.log((<Stash />).props);
  const output = shallow(<Stash />.props);
  // The first time we check the clicked state property should be false. After a click the property should be changed to true.
  expect(output.state().clicked).toEqual(false);
  output.simulate('click');
  expect(output.state().clicked).toEqual(true);
});
