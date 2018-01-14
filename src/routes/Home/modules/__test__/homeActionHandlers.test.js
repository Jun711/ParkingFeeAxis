import { handleHeaderPressed } from '../homeActionHandlers'
import { initialState } from '../home'
import constants from '../actionConstants'

const {TOGGLE_SEARCH_BAR} = constants

describe(`handle ${TOGGLE_SEARCH_BAR} action`, () => {
  console.log('initialState: ', initialState.displaySearchBar)
  it('returns the same state on an unhandled action', () => {
    expect(handleHeaderPressed(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${TOGGLE_SEARCH_BAR} action`, () => {
    expect(handleHeaderPressed(initialState, {type: TOGGLE_SEARCH_BAR, payload: {}})).toEqual({
      ...initialState,
      displaySearchBar: !initialState.displaySearchBar,
    })

    expect(handleHeaderPressed(initialState, {type: TOGGLE_SEARCH_BAR, payload: {}})).toMatchSnapshot()
  })
})

