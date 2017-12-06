// contains actions and handlers

import update from 'react-addons-update';
import constants from './actionConstants';

const {SET_TIME} = constants;

const ACTION_HANDLERS = {
  SET_TIME: handleSetTime
}

const initialState = {};

export function HomeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

export function setTime() {
  return {
    type: SET_TIME,
    payload: 'Now'
  }
}

function handleSetTime(state, action) {
  return update(state, {
    time: {
      $set: action.payload
    }
  })
}