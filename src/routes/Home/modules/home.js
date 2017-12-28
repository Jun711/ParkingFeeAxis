// contains actions and handlers

import update from 'react-addons-update';
import constants from './actionConstants';
import {PermissionsAndroid, Dimensions} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import request from '../../../util/request';


//-------------------------------
//Constants
//-------------------------------
const {
  // CHECK_LOCATION_PERMISSION,
  GET_LOCATION_PERMISSION,
  SET_LOCATION_PERMISSION,
  GETTING_CURRENT_LOCATION,
  GET_CURRENT_LOCATION,
  GET_INPUT,
  TOGGLE_SEARCH_RESULT,
  GET_LOCATION_PREDICTIONS,
  GET_SELECTED_ADDRESS,
  GET_DISTANCE_MATRIX
} = constants;

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.020
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


//-------------------------------
//Actions
//-------------------------------
export function checkLocationPermission() {
  return (dispatch) => {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      .then((suc, err) => {
        if (suc) {
          dispatch({
            type: SET_LOCATION_PERMISSION,
            payload: suc
          });
        } else {
          dispatch({
            type: GET_LOCATION_PERMISSION,
          });
        }
      })
      .catch((error) => console.error('PermissionsAndroid error: ', error))
  }
}

export function getLocationPermission() {

}

export function getCurrentLocation() {
  console.log('PermissionsAndroid.PERMISSIONS: ', PermissionsAndroid.PERMISSIONS);
  console.log('getCurrentLocation dispatch action');
  // checkLocationPermission();

  return (dispatch, store) => {
    if (!store().home.gettingCurrentLocation) {
      dispatch({
        type: GETTING_CURRENT_LOCATION,
        payload: true
      });
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
    } else {
      // TODO: can display a toast saying getting current location
    }
  }
}

// get User Input
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

// get location suggestions from google place
export function getLocationPredictions() {
  console.log('getLocationPredictions')
  return(dispatch, store) => {
    console.log('store: ', store, ' store(): ', store());
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

// get selected address
export function getSelectedAddress(payload) {
  return (dispatch, store) => {
    RNGooglePlaces.lookUpPlaceByID(payload)
      .then((result) => {
        dispatch({
          type: GET_SELECTED_ADDRESS,
          payload: result
        })
      })
      .then(() => {
        console.log('GET_DISTANCE_MATRIX then')
        // Get the distance and time
        if (store().home.selectedAddress.selectedPickUp &&
        store().home.selectedAddress.selectedDropOff) {
          console.log('GET_DISTANCE_MATRIX within if?')
          request.get('https://maps.googleapis.com/maps/api/distancematrix/json')
            .query({
              origins: store().home.selectedAddress.selectedPickUp.latitude + ',' + store().home.selectedAddress.selectedPickUp.longitude,
              destinations: store().home.selectedAddress.selectedDropOff.latitude + ',' + store().home.selectedAddress.selectedDropOff.longitude,
              mode: 'driving',
              key: 'AIzaSyB8V0YoKfKn94GulxdwTJoIW0T4UZixSgI'
            })
            .finish((error, res) => {
              dispatch({
                type: GET_DISTANCE_MATRIX,
                payload: res.body
              })
            })
        }
      })
      .catch((error) => console.log(error.message));
  }
}

//-------------------------------
//Action Handlers
//-------------------------------
function handleGetLocationPermission(state, action) {
  return update(state, {
    locationPermission: {
      $set: action.payload
    }
  })
}

function handleSetLocationPermission(state, action) {
  return update(state, {
    locationPermission: {
      $set: action.payload
    }
  })
}

function handleGettingCurrentLocation(state, action) {
  console.log('handleGettingCurrentLocation state: ', state);
  return update(state, {
    gettingCurrentLocation: {
      $set: action.payload
    }
  })
}

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
    },
    gettingLocationPermission: {
      $set: false
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

function handleGetSelectedAddress(state, action) {
  console.log('handleGetSelectedAddress action: ', action)
  let selectedTitle = state.resultTypes.pickUp? 'selectedPickUp': 'selectedDropOff';
  return update(state, {
    selectedAddress: {
      [selectedTitle]: {
        $set: action.payload
      }
    },
    resultTypes: {
      pickUp: {
        $set: false
      },
      dropOff: {
        $set: false
      }
    }
  })
}

function handleGetDistanceMatrix(state, action) {
  // console.log('handleGetDistanceMatrix set: ', $set);
  return update(state, {
    distanceMatrix: {
      $set: action.payload
    }
  })

}


const ACTION_HANDLERS = {
  GETTING_CURRENT_LOCATION: handleGettingCurrentLocation,
  GET_LOCATION_PERMISSION: handleGetLocationPermission,
  SET_LOCATION_PERMISSION: handleSetLocationPermission,
  GET_CURRENT_LOCATION: handleGetCurrentLocation,
  GET_INPUT: handleGetInputData,
  TOGGLE_SEARCH_RESULT: handleToggleSearchResult,
  GET_LOCATION_PREDICTIONS: handleGetLocationPredictions,
  GET_SELECTED_ADDRESS: handleGetSelectedAddress,
  GET_DISTANCE_MATRIX: handleGetDistanceMatrix,
}

//-------------------------------
// Initialization
//-------------------------------
const initialState = {
  gettingCurrentLocation: false,
  locationPermission: false,
  region: {},
  inputData: {},
  resultTypes: {},
  selectedAddress: {}
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