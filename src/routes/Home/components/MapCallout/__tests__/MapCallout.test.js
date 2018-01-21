import 'react-native'
import React from 'react'
import MapCallout from '../MapCallout'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('<MapCallout />', () => {
  it('MapCallout renders correctly', () => {
    const mapCalloutTree = renderer.create(
      <MapCallout />
    ).toJSON()
    expect(mapCalloutTree).toMatchSnapshot()
  })
})

