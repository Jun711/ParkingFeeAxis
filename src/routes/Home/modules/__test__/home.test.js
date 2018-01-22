import * as actions from '../home'
import constants from '../actionConstants'
import { SEARCH_INPUT_KEY } from '../../../../util/constants'

// describe(`${constants.GET_INPUT} action`, () => {
//   it(`getInputData should create ${constants.GET_INPUT} action`, () => {
//     const searchInput = {[SEARCH_INPUT_KEY]: 'Vancouver City Centre'}
//     const expectedGetInputAction = {
//       type: constants.GET_INPUT,
//       payload: searchInput
//     }
//     const expectedToggleLoaderAction = {
//       type: constants.TOGGLE_LOADER,
//       payload: true
//     }
//
//     expect(actions.getInputData(searchInput)()).toEqual(expectedAction)
//     expect(actions.getInputData(searchInput)()).toMatchSnapshot()
//   })
// })

describe(`${constants.TOGGLE_SEARCH_BAR} action`, () => {
  it(`onHeaderPressed should create ${constants.TOGGLE_SEARCH_BAR} action`, () => {

    const expectedAction = {
      type: constants.TOGGLE_SEARCH_BAR,
      payload: {}
    }

    expect(actions.onHeaderPressed({})).toEqual(expectedAction)
    expect(actions.onHeaderPressed({})).toMatchSnapshot()
  })
})

describe(`${constants.ON_MAP_PRESSED} action`, () => {
  it(`onMapPressed should create ${constants.ON_MAP_PRESSED} action`, () => {

    const expectedAction = {
      type: constants.ON_MAP_PRESSED,
      payload: {}
    }

    expect(actions.onMapPressed({})).toEqual(expectedAction)
    expect(actions.onMapPressed({})).toMatchSnapshot()
  })
})