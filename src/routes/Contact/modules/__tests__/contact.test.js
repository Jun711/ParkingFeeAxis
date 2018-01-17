import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({})
import { loadContactInfo } from '../contact'
import constants from '../actionConstants'

beforeEach(() => {
  store.clearActions()
})

describe(`${constants.LOAD_CONTACT_INFO} action`, () => {
  it(`should handle ${constants.LOAD_CONTACT_INFO} failure action`, async () => {
    const mockError = new Error('error')
    fetch.mockResponseFailure(mockError)
    await store.dispatch(loadContactInfo('/test'))

    const actions = await store.getActions()
    expect(actions[0]).toEqual({
      type: constants.LOAD_CONTACT_INFO_ERROR,
      payload: mockError
    })
    expect(store.getActions()).toMatchSnapshot()
  })

  it(`should handle ${constants.LOAD_CONTACT_INFO} success action`, async () => {
    const response = '{"contactInfo": [{"icon": "envelope-o", "method": "email", "text": "Please email me at juny.g711@gmail.com."}]}'

    fetch.mockResponseSuccess(response)
    await store.dispatch(loadContactInfo('/test'))

    const actions = await store.getActions()
    expect(actions[0]).toEqual({
      type: constants.LOAD_CONTACT_INFO,
      payload: JSON.parse(response)
    })
    expect(store.getActions()).toMatchSnapshot()
  })
})