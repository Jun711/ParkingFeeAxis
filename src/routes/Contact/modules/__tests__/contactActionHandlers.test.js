import * as actionHandlers from '../contactActionHandlers'
import { initialState } from '../contact'
import constants from '../actionConstants'
import ContactInfo from '../../components/ContactInfoList/ContactInfo'

describe(`handle ${constants.LOAD_CONTACT_INFO} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(actionHandlers.handleLoadContactInfo(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${constants.LOAD_CONTACT_INFO} success action`, () => {
    expect(actionHandlers.handleLoadContactInfo(initialState, {
      type: constants.LOAD_CONTACT_INFO,
      payload: ContactInfo
    })).toEqual({
      ...initialState,
      contactInfoLoaded: true,
      contactInfo: ContactInfo,
      loadingError: false
    })

    expect(actionHandlers.handleLoadContactInfo(initialState, {
      type: constants.LOAD_CONTACT_INFO,
      payload: ContactInfo
    })).toMatchSnapshot()
  })
})


describe(`handle ${constants.LOAD_CONTACT_INFO_ERROR} action`, () => {
  it(`handles ${constants.LOAD_CONTACT_INFO_ERROR} action`, () => {
    const error = new Error('error')

    expect(actionHandlers.handleLoadContactInfoError(initialState, {
      type: constants.LOAD_CONTACT_INFO_ERROR,
      payload: error
    })).toEqual({
      ...initialState,
      contactInfoLoaded: false,
      loadingError: true
    })

    expect(actionHandlers.handleLoadContactInfoError(initialState, {
      type: constants.LOAD_CONTACT_INFO_ERROR,
      error
    })).toMatchSnapshot()
  })
})