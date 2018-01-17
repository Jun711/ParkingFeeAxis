import 'react-native'
import React from 'react'
import IconWithText from '../IconWithText'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('<IconWithText />', () => {
  it('IconWithText renders correctly', () => {
    const iconWithTextComponent = renderer.create(
      <IconWithText/>
    ).toJSON()
    expect(iconWithTextComponent).toMatchSnapshot()
  })
})

