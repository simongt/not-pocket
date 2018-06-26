import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// import { shallowToJson } from 'enzyme-to-json';

import Stash from '../Stash';

// Tutorial: https://medium.com/wehkamp-techblog/unit-testing-your-react-application-with-jest-and-enzyme-81c5545cee45

const stashOutput = {
  card_description: "There are some people out there that still believe that animals are just dumb beasts, but the unlikely animal friendships we've gathered here will prove that they are capable of feeling love and compa…",
  card_image_height: null,
  card_image_url: "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/unusual-animal-friendship-coverimage.jpg",
  card_image_width: null,
  card_site_name: "Bored Panda",
  card_title: "15 Unusual Animal Friendships That Will Melt Your Heart",
  card_type: "article",
  card_url: "https://www.boredpanda.com/unusual-animal-friendships-interspecies/",
  is_public: true,
  stash_id: 16,
  stash_url: "https://www.boredpanda.com/unusual-animal-friendships-interspecies/",
  tag_ids: [1],
  tags: [1],
  user_id: 5,
  username: "simon.tsegay@gmail.com"
}

// test the state of our component by rendering the output and check the state
it('delete button appears only when user is logged in', () => {
  const output = shallow(<Stash stash={stashOutput} userLoggedIn={true} />);
  // console.log(output.instance().handleClick);
  // console.log('the state: ', output.state());
  // console.log('debug: ', output.debug());
  // console.log(output.contains(
    // <button onClick={output.instance().handleClick}>Delete</button>
  // ));
  expect(output.contains(
    <button onClick={output.instance().handleClick}>Delete</button>
  )).toBe(true);
  // The first time we check the clicked state property should be false. After a click the property should be changed to true.
  // expect(output.state().clicked).toEqual(false);
  // output.simulate('click');
  // expect(output.state().clicked).toEqual(true);
});


// it('button componet', () => {
//   it('renders as a <button>.', () => {
//     const wrapper = shallow(<Button onclick="234455" />);
//     expect(wrapper.is('button')).toEqual(true);
//   });
// });
