import 'react-native'
import React from 'react'
import ParkingSpotDetail from '../ParkingSpotDetail'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('<ParkingSpotDetail />', () => {
  it('ParkingSpotDetail renders correctly', () => {
    const parkingSpotDetailComponent = renderer.create(
      <ParkingSpotDetail
        presentRateText={'$1 per hour.'}
        presentTimeLimitText={'2 hours.'}
      />
    ).toJSON()
    expect(parkingSpotDetailComponent).toMatchSnapshot()
  })

  it('ParkingSpotDetail renders correctly', () => {
    const parkingSpotDetailComponent = renderer.create(
      <ParkingSpotDetail
        presentRateText={'free now.'}
        presentTimeLimitText={'no time limit.'}
      />
    ).toJSON()
    expect(parkingSpotDetailComponent).toMatchSnapshot()
  })
})
