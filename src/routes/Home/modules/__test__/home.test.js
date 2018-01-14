import * as actions from '../home'
import constants from '../actionConstants'

const {TOGGLE_SEARCH_BAR, ON_MAP_PRESSED} = constants

describe(`${TOGGLE_SEARCH_BAR} action`, () => {
  it(`should create ${TOGGLE_SEARCH_BAR} action`, () => {

    const expectedAction = {
      type: TOGGLE_SEARCH_BAR,
      payload: {}
    }

    expect(actions.onHeaderPressed({})).toEqual(expectedAction)
    expect(actions.onHeaderPressed({})).toMatchSnapshot()
  })
})

describe(`${ON_MAP_PRESSED} action`, () => {
  it(`should create ${ON_MAP_PRESSED} action`, () => {

    const expectedAction = {
      type: ON_MAP_PRESSED,
      payload: {}
    }

    expect(actions.onMapPressed({})).toEqual(expectedAction)
    expect(actions.onMapPressed({})).toMatchSnapshot()
  })
})