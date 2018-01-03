// contains actions and handlers
import update from 'react-addons-update';
import constants from './actionConstants';
import { PermissionsAndroid, Dimensions } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import request from '../../../util/request';
import parkingSpots from '../../../assets/data/parkingSpots';
import {
  PARKING_SERVER_URL,
  LATITUDE_DELTA,
  PERMISSION_REQ_TITLE,
  PERMISSION_REQ_MSG
} from '../../../util/constants';

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
  GET_DISTANCE_MATRIX,
  UPDATE_CENTER_MARKER,
  HANDLE_CENTRE_COORD,
  DISPLAY_NEARBY_PARKING_SPOTS,
} = constants;

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

//-------------------------------
// Utility function
//-------------------------------
function getLocationPermission() {
  console.log('getLocationPermission')
  try {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': PERMISSION_REQ_TITLE,
        'message': PERMISSION_REQ_MSG
      }
    ).then((suc, err) => {
      if (suc) {
        console.log("You can access the location")
      } else {
        console.log("Location permission denied")
      }
    })
  } catch (err) {
    console.error('getLocationPermission: ', err);
  }
}

//-------------------------------
// Actions
//-------------------------------
export function checkLocationPermission() {
  return (dispatch) => {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      .then((suc, err) => {
        if (suc) {
          // getLocationPermission();
          dispatch({
            type: SET_LOCATION_PERMISSION,
            payload: suc
          });
        } else {
          getLocationPermission();
          // dispatch({
          //   type: GET_LOCATION_PERMISSION,
          // });
        }
      })
      .catch((error) => console.error('PermissionsAndroid error: ', error))
  }
}

export function getCurrentLocation() {
  console.log('PermissionsAndroid.PERMISSIONS: ', PermissionsAndroid.PERMISSIONS);
  console.log('getCurrentLocation dispatch action');

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
        (error) => {
          dispatch({
            type: GETTING_CURRENT_LOCATION,
            payload: false
          });
          console.log('getCurrentLocation error: ', error)
          // TODO: can display a toast informing users what error
        },
        {enableHighAccuracy: false, timeout: 25000, maximumAge: 1000}
      )
    } else {
      console.log('it is gettingCurrentLocation');
      // TODO: can display a toast saying getting current location
    }
  }
}

// get user's input
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
  return (dispatch, store) => {
    console.log('store: ', store, ' store(): ', store());
    let userInput = store().home.resultTypes.pickUp ? store().home.inputData.pickUp : store().home.inputData.dropOff;
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

// get selected address and do a distance matrix request
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
        // Get the distance and time
        if (store().home.selectedAddress.selectedPickUp &&
          store().home.selectedAddress.selectedDropOff) {
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

// update map region and get nearby parking spots
export function handleRegionChangeComplete(payload) {
  return (dispatch, store) => {
    dispatch({
      type: UPDATE_CENTER_MARKER,
      payload
    })
    console.log('PARKING_SERVER_URL: ', PARKING_SERVER_URL)
    request.get(PARKING_SERVER_URL)
      .query({
        latitude: payload.latitude,
        longitude: payload.longitude
      })
      .finish((err, res) => {
        if (err) {
          // TODO: display error
          // console.log('parkingSpots req err: ', err);
        } else {
          console.log('res: ', res.body)
          dispatch({
            type: DISPLAY_NEARBY_PARKING_SPOTS,
            payload: res.body
          })
        }
      })

  }
}

//-------------------------------
//Action Handlers
//-------------------------------
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
  UPDATE_CENTER_MARKER: handleUpdateCenterMarker,
  DISPLAY_NEARBY_PARKING_SPOTS: handleDisplayNearbyParkingSpots,
}

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
    userCoord: {
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
    gettingCurrentLocation: {
      $set: false
    },
    displayCentreMarker: {
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
  let selectedTitle = state.resultTypes.pickUp ? 'selectedPickUp' : 'selectedDropOff';
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
  return update(state, {
    distanceMatrix: {
      $set: action.payload
    }
  })
}

function handleUpdateCenterMarker(state, action) {
  let actionLat = action.payload.latitude;
  let actionLon = action.payload.longitude;
  let stateLat = state.userCoord.latitude;
  let stateLon = state.userCoord.longitude;

  const isUserAtCentre = (stateLat.toFixed(6) === actionLat.toFixed(6) && stateLon.toFixed(6) === actionLon.toFixed(6)) ? false : true;
  return update(state, {
    region: {
      latitude: {
        $set: actionLat
      },
      longitude: {
        $set: actionLon
      },
      latitudeDelta: {
        $set: action.payload.latitudeDelta
      },
      longitudeDelta: {
        $set: action.payload.longitudeDelta
      },
    },
    displayCentreMarker: {
      $set: isUserAtCentre
    },
  })
}

function handleDisplayNearbyParkingSpots(state, action) {
  let centreLat = action.payload.latitude;
  let centreLon = action.payload.longitude;

  return update(state, {
    nearbyParkingSpots: {
      $set: action.payload
    }
  });
}

//-------------------------------
// Initialization
//-------------------------------
const initialState = {
  gettingCurrentLocation: false,
  locationPermission: false,
  displayCentreMarker: false,
  userCoord: {
    latitude: 49.2820,
    longitude: -123.1171,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  },
  region: {
    latitude: 49.2820,
    longitude: -123.1171,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  },
  inputData: {},
  resultTypes: {},
  selectedAddress: {},
  nearbyParkingSpots: parkingSpots,
};

export function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}