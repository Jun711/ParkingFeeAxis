import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({})
import { loadFaqList } from '../faq'
import constants from '../actionConstants'

const {LOAD_FAQ_LIST, LOAD_FAQ_LIST_ERROR} = constants

beforeEach(() => {
  store.clearActions()
})

describe(`${LOAD_FAQ_LIST} action`, () => {
  it(`should handle ${LOAD_FAQ_LIST} failure action`, async () => {
    const mockError = new Error('error')
    fetch.mockResponseFailure(mockError)
    await store.dispatch(loadFaqList('/test'))

    const actions = await store.getActions()
    expect(actions[0]).toEqual({
      type: LOAD_FAQ_LIST_ERROR,
      payload: mockError
    })
    expect(store.getActions()).toMatchSnapshot()
  })

  it(`should handle ${LOAD_FAQ_LIST} success action`, async () => {
    const response = '{"faqs": [{"text": "Frequently asked questions"}]}'
    fetch.mockResponseSuccess(response)
    await store.dispatch(loadFaqList('/test'))

    const actions = await store.getActions()
    expect(actions[0]).toEqual({
      type: LOAD_FAQ_LIST,
      payload: JSON.parse(response)
    })
    expect(store.getActions()).toMatchSnapshot()
  })
})