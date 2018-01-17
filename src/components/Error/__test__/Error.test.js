import 'react-native'
import React from 'react'
import Error from '../Error'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('<Error />', () => {
  it('Error renders correctly', () => {
    const errorComponent = renderer.create(
      <Error/>
    ).toJSON()
    expect(errorComponent).toMatchSnapshot()
  })
})

