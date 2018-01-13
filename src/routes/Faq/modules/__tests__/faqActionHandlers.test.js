import { handleLoadFaqList } from '../faqActionHandlers'
import { initialState } from '../faq'
import constants from '../actionConstants'
import FaqData from '../../components/FaqList/FaqData'

const {LOAD_FAQ_LIST, LOAD_FAQ_LIST_ERROR} = constants


describe(`handle ${LOAD_FAQ_LIST} actions`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(handleLoadFaqList(initialState, {type: undefined})).toMatchSnapshot()
  })

  it('handles LOAD_FAQ_LIST_ERROR action', () => {
    const error = new Error('error')
    expect(handleLoadFaqList(initialState, {type: LOAD_FAQ_LIST_ERROR, error})).toMatchSnapshot()
  })

  it('handles LOAD_FAQ_LIST success action', () => {
    expect(handleLoadFaqList(initialState, {type: LOAD_FAQ_LIST, payload: FaqData})).toEqual({
      ...initialState,
      faqLoaded: true,
      faqList: FaqData
    })

    expect(handleLoadFaqList(initialState, {type: LOAD_FAQ_LIST, payload: FaqData})).toMatchSnapshot()
  })
})


