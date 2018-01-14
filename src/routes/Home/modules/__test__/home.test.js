import * as actions from '../home'
import constants from '../actionConstants'

const {TOGGLE_SEARCH_BAR} = constants

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