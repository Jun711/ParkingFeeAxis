import { handleLoadContactInfo } from '../contactActionHandlers'
import { initialState } from '../contact'
import constants from '../actionConstants'
import ContactInfo from '../../components/ContactInfoList/ContactInfo'

describe(`handle ${constants.LOAD_CONTACT_INFO} action`, () => {
  it('returns the same state on an unhandled action', () => {
    expect(handleLoadContactInfo(initialState, {type: undefined})).toMatchSnapshot()
  })

  it(`handles ${constants.LOAD_CONTACT_INFO} success action`, () => {
    expect(handleLoadContactInfo(initialState, {type: constants.LOAD_CONTACT_INFO, payload: ContactInfo})).toEqual({
      ...initialState,
      contactInfoLoaded: true,
      contactInfo: ContactInfo
    })

    expect(handleLoadContactInfo(initialState, {
      type: constants.LOAD_CONTACT_INFO,
      payload: ContactInfo
    })).toMatchSnapshot()
  })
})


describe(`handle ${constants.LOAD_CONTACT_INFO_ERROR} action`, () => {
  it(`handles ${constants.LOAD_CONTACT_INFO_ERROR} action`, () => {
    const error = new Error('error')

    const errorMsg = [{
      '_id': 'errorMsg',
      'icon': 'warning',
      'method': 'error',
      'text': 'Error: Contact info loading timeout'
    }];

    expect(handleLoadContactInfo(initialState, {type: constants.LOAD_CONTACT_INFO, payload: errorMsg})).toEqual({
      ...initialState,
      contactInfoLoaded: true,
      contactInfo: errorMsg
    })

    expect(handleLoadContactInfo(initialState, {type: constants.LOAD_CONTACT_INFO_ERROR, error})).toMatchSnapshot()
  })
})