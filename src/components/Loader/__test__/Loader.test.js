import 'react-native';
import React from 'react';
import Loader from '../Loader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Loader />', () => {
  it('FaqList renders correctly', () => {
    const LoaderTree = renderer.create(
      <Loader />
    ).toJSON();
    expect(LoaderTree).toMatchSnapshot();
  });
});

