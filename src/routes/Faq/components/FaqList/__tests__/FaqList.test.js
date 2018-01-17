import 'react-native';
import React from 'react';
import FaqList from '../FaqList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<FaqList />', () => {
  it('FaqList renders correctly', () => {
    const faqListComponent = renderer.create(
      <FaqList />
    ).toJSON();
    expect(faqListComponent).toMatchSnapshot();
  });
});

