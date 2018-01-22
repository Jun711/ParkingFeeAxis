// contains actions and handlers
import update from 'immutability-helper'
import constants from './actionConstants'
import {} from '../../../util/constants'
import { Actions } from 'react-native-router-flux'


//-------------------------------
//Constants
//-------------------------------
const {
  OPEN_PAGE
} = constants

//-------------------------------
// Utility functions
//-------------------------------


//-------------------------------
// Actions
//-------------------------------
export function openPage(payload) {
  return {
    type: OPEN_PAGE,
    payload
  }
}

//-------------------------------
//Action Handlers
//-------------------------------
const ACTION_HANDLERS = {
  OPEN_PAGE: handleOpenPage
}

function handleOpenPage(state, action) {
  Actions[action.payload.page].call()
  return update(state, {
    currentPage: {
      $set: action.payload.page
    }
  })
}

//-------------------------------
// Initialization
//-------------------------------
const initialState = {
  currentPage: '',
}

export function AboutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}