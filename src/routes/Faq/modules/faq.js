// contains actions and handlers
import update from 'immutability-helper';
import constants from './actionConstants';
import { PermissionsAndroid, Dimensions, ToastAndroid } from 'react-native';
import {} from '../../../util/constants';

//-------------------------------
//Constants
//-------------------------------
const {
  LOAD_FAQ_LIST
} = constants;

//-------------------------------
// Utility function
//-------------------------------


//-------------------------------
// Actions
//-------------------------------
export function loadFaqList() {
  return {
    type: LOAD_FAQ_LIST,
  }
}


//-------------------------------
//Action Handlers
//-------------------------------
const ACTION_HANDLERS = {
}

//-------------------------------
// Initialization
//-------------------------------
const initialState = {
  faqLoaded: false
};

export function FaqReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}