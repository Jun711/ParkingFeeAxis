import { handleToggleSearchBar, handleMapPressed } from '../homeActionHandlers'
import { initialState } from '../home'
import constants from '../actionConstants'

const {TOGGLE_SEARCH_BAR, ON_MAP_PRESSED} = constants

describe(`handle ${TOGGLE_SEARCH_BAR} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(handleToggleSearchBar(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${TOGGLE_SEARCH_BAR} action`, () => {
    expect(handleToggleSearchBar(initialState, {type: TOGGLE_SEARCH_BAR, payload: {}})).toEqual({
      ...initialState,
      displaySearchBar: !initialState.displaySearchBar,
    })

    expect(handleToggleSearchBar(initialState, {type: TOGGLE_SEARCH_BAR, payload: {}})).toMatchSnapshot()
  })
})

describe(`handle ${ON_MAP_PRESSED} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(handleMapPressed(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${ON_MAP_PRESSED} action`, () => {
    expect(handleMapPressed(initialState, {type: ON_MAP_PRESSED, payload: {}})).toEqual({
      ...initialState,
      displaySearchBar: false,
      displayCentreMarker: true,
      calloutPressed: false
    })

    expect(handleMapPressed(initialState, {type: ON_MAP_PRESSED, payload: {}})).toMatchSnapshot()
  })
})

