import 'react-native'
import React from 'react'
import ParkingSpotDetail from '../ParkingSpotDetail'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('<ParkingSpotDetail />', () => {
  it('ParkingSpotDetail renders correctly', () => {
    const parkingSpotDetailComponent = renderer.create(
      <ParkingSpotDetail/>
    ).toJSON()
    expect(parkingSpotDetailComponent).toMatchSnapshot()
  })
})

