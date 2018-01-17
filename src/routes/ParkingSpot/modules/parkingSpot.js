// contains actions and handlers
// import constants from './actionConstants'
// import {} from '../../../util/constants'
// import * as actionHandlers from './parkingSpotActionHandlers'

//-------------------------------
// Utility function
//-------------------------------


//-------------------------------
// Actions
//-------------------------------


//-------------------------------
//Action Handlers
//-------------------------------
const ACTION_HANDLERS = {
}

//-------------------------------
// Initialization
//-------------------------------
export const initialState = {
}

export function ParkingSpotReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}