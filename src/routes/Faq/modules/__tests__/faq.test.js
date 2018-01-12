import { loadFaqList } from '../faq';
import constants from '../actionConstants';

const { LOAD_FAQ_LIST } = constants;

it('creates a LOAD_FAQ_LIST action', () => {
  expect(loadFaqList()).toEqual(
    {
      type: LOAD_FAQ_LIST,
    }
  );
  // using Jest snapshot
  expect(loadFaqList()).toMatchSnapshot();
});