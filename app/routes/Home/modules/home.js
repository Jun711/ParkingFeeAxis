// contains actions and handlers

import update from 'react-addons-update';
import constants from './actionConstants';
import {Dimensions} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.020
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


//-------------------------------
//Constants
//-------------------------------
const {
  GET_CURRENT_LOCATION,
  GET_INPUT,
  TOGGLE_SEARCH_RESULT,
  GET_LOCATION_PREDICTIONS
} = constants;

//-------------------------------
//Actions
//-------------------------------
export function getCurrentLocation() {
  console.log('getCurrentLocation')
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({
          type: GET_CURRENT_LOCATION,
          payload: position
        });
      },
      (error) => console.log('getCurrentLocation: ', error.message),
      {enableHighAccuracy: false, timeout: 25000, maximumAge: 1000}
    )
  }
}

// Get User Input
export function getInputData(payload) {
  return {
    type: GET_INPUT,
    payload
  }
}

// toggle search result modal
export function toggleSearchResultModal(payload) {
  console.log('constants: ', constants)
  console.log('toggleSearchResultModal payload: ', payload)
  return {
    type: TOGGLE_SEARCH_RESULT,
    payload
  }
}

// Get location suggestions from google place
export function getLocationPredictions() {
  console.log('getLocationPredictions')
  return(dispatch, store) => {
    let userInput = store().home.resultTypes.pickUp? store().home.inputData.pickUp: store().home.inputData.dropOff;
    RNGooglePlaces.getAutocompletePredictions(userInput, {
      country: 'CA'
    })
      .then((result) => {
        dispatch({
          type: GET_LOCATION_PREDICTIONS,
          payload: result
        })
      })
      .catch((error) => console.error('GPlace prediction error: ', error))
  };
}

//-------------------------------
//Action Handlers
//-------------------------------
function handleGetCurrentLocation(state, action) {
  return update(state, {
    region: {
      latitude: {
        $set: action.payload.coords.latitude
      },
      longitude: {
        $set: action.payload.coords.longitude
      },
      latitudeDelta: {
        $set: LATITUDE_DELTA
      },
      longitudeDelta: {
        $set: LONGITUDE_DELTA
      },
    }
  })
}

function handleGetInputData(state, action) {
  const {key, value} = action.payload;
  return update(state, {
    inputData: {
      [key]: {
        $set: value
      }
    }
  })
}

function handleToggleSearchResult(state, action) {
  console.log('handleToggleSearchResult action:', action)
  console.log('pickup true?: ', action.payload === 'pickUp')
  console.log('pickup true?: ', action.payload == 'dropOff')
  if (action.payload === 'pickUp') {
    console.log('pickup')
    return update(state, {
      resultTypes: {
        pickUp: {
          $set: true
        },
        dropOff: {
          $set: false
        }
      },
      predictions: {
        $set: []
      }
    })
  }
  if (action.payload === 'dropOff') {
    console.log('dropOff')
    return update(state, {
      resultTypes: {
        pickUp: {
          $set: false
        },
        dropOff: {
          $set: true
        }
      },
      predictions: {
        $set: []
      }
    })
  }
}

function handleGetLocationPredictions(state, action) {
  console.log('handleGetLocationPredictions action: ', action)
  return update(state, {
    predictions: {
      $set: action.payload
    }
  })
}

const ACTION_HANDLERS = {
  GET_CURRENT_LOCATION: handleGetCurrentLocation,
  GET_INPUT: handleGetInputData,
  TOGGLE_SEARCH_RESULT: handleToggleSearchResult,
  GET_LOCATION_PREDICTIONS: handleGetLocationPredictions,
}

// initialization
const initialState = {
  region: {},
  inputData: {},
  resultTypes: {}
};

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