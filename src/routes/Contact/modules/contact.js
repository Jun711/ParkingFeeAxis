// contains actions and handlers
import constants from './actionConstants'
import timeout from '../../../util/timeout'
import {
  CONTACT_INFO,
} from '../../../util/constants'
import * as actionHandlers from './contactActionHandlers'

//-------------------------------
// Utility function
//-------------------------------


//-------------------------------
// Actions
//-------------------------------
export function loadContactInfo() {
  return async (dispatch) => {
    try {
      const response = await timeout(fetch(CONTACT_INFO))
      const responseJson = await response.json()
      dispatch({
        type: constants.LOAD_CONTACT_INFO,
        payload: responseJson
      })
    } catch (error) {
      dispatch({
        type: constants.LOAD_CONTACT_INFO_ERROR,
        payload: error
      })
    }
  }
}

//-------------------------------
//Action Handlers
//-------------------------------
const ACTION_HANDLERS = {
  LOAD_CONTACT_INFO: actionHandlers.handleLoadContactInfo,
  LOAD_CONTACT_INFO_ERROR: actionHandlers.handleLoadContactInfoError,
}

//-------------------------------
// Initialization
//-------------------------------
export const initialState = {
  contactInfoLoaded: false,
  contactInfo: [],
  loadingError: false,
}

export function ContactReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}