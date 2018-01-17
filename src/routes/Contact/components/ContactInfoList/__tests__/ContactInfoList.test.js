import 'react-native'
import React from 'react'
import ContactInfoList from '../ContactInfoList'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('<ContactInfoList />', () => {
  it('ContactInfoList renders correctly', () => {
    const contactInfoComponent = renderer.create(
      <ContactInfoList/>
    ).toJSON()
    expect(contactInfoComponent).toMatchSnapshot()
  })
})

