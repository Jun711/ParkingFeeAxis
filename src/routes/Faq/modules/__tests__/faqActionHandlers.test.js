import * as actionHandlers from '../faqActionHandlers'
import { initialState } from '../faq'
import constants from '../actionConstants'
import FaqData from '../../components/FaqList/FaqData'

const {LOAD_FAQ_LIST, LOAD_FAQ_LIST_ERROR} = constants

describe(`handle ${LOAD_FAQ_LIST} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(actionHandlers.handleLoadFaqList(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${LOAD_FAQ_LIST} success action`, () => {
    expect(actionHandlers.handleLoadFaqList(initialState, {type: LOAD_FAQ_LIST, payload: FaqData})).toEqual({
      ...initialState,
      faqLoaded: true,
      faqList: FaqData,
      loadingError: false
    })

    expect(actionHandlers.handleLoadFaqList(initialState, {type: LOAD_FAQ_LIST, payload: FaqData})).toMatchSnapshot()
  })
})


describe(`handle ${LOAD_FAQ_LIST_ERROR} action`, () => {
  it(`handles ${LOAD_FAQ_LIST_ERROR} action`, () => {
    const error = new Error('error')

    expect(actionHandlers.handleLoadFaqListError(initialState, {type: LOAD_FAQ_LIST_ERROR, payload: error})).toEqual({
      ...initialState,
      faqLoaded: false,
      loadingError: true
    })

    expect(actionHandlers.handleLoadFaqListError(initialState, {type: LOAD_FAQ_LIST_ERROR, error})).toMatchSnapshot()
  })
})