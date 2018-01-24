// contains actions and handlers
import update from 'immutability-helper'
import constants from './actionConstants'
import { PermissionsAndroid, Dimensions, ToastAndroid } from 'react-native'
import RNGooglePlaces from 'react-native-google-places'
import request from '../../../util/request'
import {
  PARKING_SERVER_URL,
  LATITUDE_DELTA,
  PERMISSION_REQ_TITLE,
  PERMISSION_REQ_MSG,
  TOAST_HEADER_Y_OFFSET,
  TOAST_HEADER_X_OFFSET,
  LOCATION_ERROR_MSG_ONE,
  LOCATION_ERROR_MSG_TWO,
  LOCATION_ERROR_DEFAULT_MSG,
  WEEKDAY_9_6,
  WEEKDAY_6_PLUS,
  SAT_9_6,
  SAT_6_PLUS,
  SUN_9_6,
  SUN_6_PLUS,
  MIN_PARKING_RATE,
  MAX_PARKING_RATE,
  FREE_PARKING,
  SEARCH_INPUT_KEY,
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
  NO_TIME_LIMIT_TEXT,
  FREE_PARKING_LIMIT,
  NORTH_BAND,
  SOUTH_BAND,
  EAST_BAND,
  WEST_BAND,
  SERVICE_UNAVAILABLE,
  SERVICE_UNAVAILABLE_HERE,
  NO_PARKING_METERS,
  PROCESSING_NOTE
} from '../../../util/constants'
import * as actionHandlers from './homeActionHandlers'

//-------------------------------
//Constants
//-------------------------------
const {
  SET_LOCATION_PERMISSION,
  GETTING_CURRENT_LOCATION,
  GET_CURRENT_LOCATION,
  GET_INPUT,
  GET_LOCATION_PREDICTIONS,
  GET_SELECTED_ADDRESS,
  UPDATE_CENTER_MARKER,
  DISPLAY_NEARBY_PARKING_SPOTS,
  SET_MARKER_PRESSED,
  ON_MAP_PRESSED,
  SHOW_TOAST,
  REMOVE_MARKERS_POST_THRESHOLD,
  PROCESSING_PARKING_SPOTS
} = constants

const {width, height} = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

//-------------------------------
// Utility function
//-------------------------------
function getLocationPermission() {
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
    console.error('getLocationPermission: ', err)
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
          dispatch({
            type: SET_LOCATION_PERMISSION,
            payload: suc
          })
        } else {
          getLocationPermission()
        }
      })
      .catch((error) => console.error('PermissionsAndroid error: ', error))
  }
}

function displayLocationErrorToast(errorCode, dispatch) {
  let errorText
  switch (errorCode) {
    case 1:
      errorText = LOCATION_ERROR_MSG_ONE
      break
    case 2:
      errorText = LOCATION_ERROR_MSG_TWO
      break
    default:
      errorText = LOCATION_ERROR_DEFAULT_MSG
  }

  dispatch({
    type: SHOW_TOAST,
    payload: {
      text: errorText
    }
  })
}

export function getCurrentLocation() {
  return (dispatch, store) => {
    dispatch({
      type: SHOW_TOAST,
      payload: {
        text: 'Getting current location.'
      }
    })

    if (!store().home.gettingCurrentLocation) {
      dispatch({
        type: GETTING_CURRENT_LOCATION,
        payload: true
      })
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch({
            type: GET_CURRENT_LOCATION,
            payload: position
          })
        },
        (error) => {
          dispatch({
            type: GETTING_CURRENT_LOCATION,
            payload: false
          })
          displayLocationErrorToast(error.code, dispatch)
        },
        {enableHighAccuracy: false, timeout: 25000, maximumAge: 1000}
      )
    }
  }
}

// get user's input
export function getInputData(payload) {
  return (dispatch) => {
    dispatch({
      type: GET_INPUT,
      payload
    })
    dispatch({
      type: constants.TOGGLE_LOADER,
      payload: {
        value: true
      }
    })
  }
}

// get location suggestions from google place
export function getLocationPredictions() {
  return (dispatch, store) => {
    let userInput = store().home.inputData[SEARCH_INPUT_KEY]
    RNGooglePlaces.getAutocompletePredictions(userInput, {
      latitude: store().home.userCoord.latitude || DEFAULT_LATITUDE,
      longitude: store().home.userCoord.longitude || DEFAULT_LONGITUDE,
      country: 'CA'
    })
      .then((result) => {
        dispatch({
          type: constants.TOGGLE_LOADER,
          payload: {
            value: false
          }
        })
        dispatch({
          type: GET_LOCATION_PREDICTIONS,
          payload: result
        })
      })
      .catch((error) => {
        console.error('GPlace prediction error: ', error)
        dispatch({
          type: SHOW_TOAST,
          payload: {
            text: SERVICE_UNAVAILABLE
          }
        })
      })
  }
}

// get selected address and do a distance matrix request
export function selectLocation(payload) {
  return (dispatch) => {
    RNGooglePlaces.lookUpPlaceByID(payload)
      .then((result) => {
        dispatch({
          type: constants.TOGGLE_CALLOUT,
          payload: {
            value: false
          }
        })
        dispatch({
          type: GET_SELECTED_ADDRESS,
          payload: result
        })
        dispatch({
          type: constants.TOGGLE_SEARCH_BAR
        })
        dispatch({
          type: constants.TOGGLE_CENTRE_MARKER,
          payload: {
            value: false
          }
        })
      })
      .catch((error) => console.log(error.message))
  }
}

function isWithinBound(coordinates) {
  if (coordinates.latitude > NORTH_BAND || coordinates.latitude < SOUTH_BAND
    || coordinates.longitude > EAST_BAND || coordinates.longitude < WEST_BAND) {
    return false
  }
  return true
}

function isCloseToLastSearch(lastSearchCoords, nextSearchCoordinates) {
  if (lastSearchCoords.latitude.toFixed(3) === nextSearchCoordinates.latitude.toFixed(3)
    && lastSearchCoords.longitude.toFixed(3) === nextSearchCoordinates.longitude.toFixed(3)) {
    return true
  }
  return false
}

// update map region and get nearby parking spots
export function handleRegionChangeComplete(payload) {
  return (dispatch, store) => {
    if (store().home.calloutPressed) {
      payload = {...payload, notDisplayingCenterMarker: true}
    }
    if (store().home.processingParkingSpots) {
      dispatch({
        type: SHOW_TOAST,
        payload: {
          text: PROCESSING_NOTE
        }
      })
      return
    }
    dispatch({
      type: UPDATE_CENTER_MARKER,
      payload
    })

    if (!store().home.calloutPressed) {
      if (!isWithinBound({latitude: payload.latitude, longitude: payload.longitude})) {
        dispatch({
          type: SHOW_TOAST,
          payload: {
            text: SERVICE_UNAVAILABLE_HERE
          }
        })
      } else {
        if (!isCloseToLastSearch(store().home.lastSearchCoordinates,
            {latitude: payload.latitude, longitude: payload.longitude})) {
          dispatch({
            type: PROCESSING_PARKING_SPOTS,
            payload: true
          })
          request
            .get(PARKING_SERVER_URL)
            .query({
              latitude: payload.latitude,
              longitude: payload.longitude
            })
            .finish((err, res) => {
              if (err) {
                dispatch({
                  type: SHOW_TOAST,
                  payload: {
                    text: SERVICE_UNAVAILABLE
                  }
                })
              } else {
                dispatch({
                  type: constants.UPDATE_LAST_SEARCH,
                  payload: {
                    latitude: payload.latitude,
                    longitude: payload.longitude
                  }
                })

                if (res.body && res.body.length === 0) {
                  dispatch({
                    type: SHOW_TOAST,
                    payload: {
                      text: NO_PARKING_METERS
                    }
                  })
                } else {
                  // dispatch({
                  //   type: REMOVE_MARKERS_POST_THRESHOLD
                  // })
                  dispatch({
                    type: DISPLAY_NEARBY_PARKING_SPOTS,
                    payload: res.body
                  })
                }
              }
            })
        }
      }
    }
  }
}

export function onMarkerPressed(payload) {
  return {
    type: SET_MARKER_PRESSED,
    payload
  }
}

export function onCalloutPressed(payload) {
  return {
    type: constants.DISPLAY_CALLOUT_DETAIL,
    payload
  }
}

export function onMapPressed(payload) {
  return {
    type: ON_MAP_PRESSED,
    payload
  }
}

export function onHeaderPressed(payload) {
  return {
    type: constants.TOGGLE_SEARCH_BAR,
    payload
  }
}

export function onHeaderBackPressed(payload) {
  return {
    type: constants.TOGGLE_SEARCH_BAR,
    payload
  }
}

//-------------------------------
//Action Handlers
//-------------------------------
const ACTION_HANDLERS = {
  GETTING_CURRENT_LOCATION: handleGettingCurrentLocation,
  SET_LOCATION_PERMISSION: handleSetLocationPermission,
  GET_CURRENT_LOCATION: handleGetCurrentLocation,
  GET_INPUT: handleGetInputData,
  GET_LOCATION_PREDICTIONS: handleGetLocationPredictions,
  GET_SELECTED_ADDRESS: handleGetSelectedAddress,
  UPDATE_CENTER_MARKER: handleUpdateCenterMarker,
  DISPLAY_NEARBY_PARKING_SPOTS: handleDisplayNearbyParkingSpots,
  SET_MARKER_PRESSED: handleSetMarkerPressed,
  ON_MAP_PRESSED: actionHandlers.handleMapPressed,
  SHOW_TOAST: handleShowToast,
  TOGGLE_CENTRE_MARKER: actionHandlers.handleToggleCentreMarker,
  TOGGLE_LOADER: actionHandlers.handleToggleLoader,
  TOGGLE_SEARCH_BAR: actionHandlers.handleToggleSearchBar,
  TOGGLE_CALLOUT: actionHandlers.handleToggleCallout,
  DISPLAY_CALLOUT_DETAIL: actionHandlers.handleDisplayCalloutDetail,
  UPDATE_LAST_SEARCH: actionHandlers.handleUpdateLastSearch,
  REMOVE_MARKERS_POST_THRESHOLD: actionHandlers.handleRemoveMarkersPostThreshold,
  PROCESSING_PARKING_SPOTS: actionHandlers.handleProcessingParkingSpots,
}

function handleSetLocationPermission(state, action) {
  return update(state, {
    locationPermission: {
      $set: action.payload
    }
  })
}

function handleGettingCurrentLocation(state, action) {
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
  const {key, value} = action.payload
  return update(state, {
    inputData: {
      [key]: {
        $set: value
      }
    }
  })
}

function handleGetLocationPredictions(state, action) {
  return update(state, {
    locationPredictions: {
      $set: action.payload
    }
  })
}

function handleGetSelectedAddress(state, action) {
  return update(state, {
    selectedAddress: {
      $set: action.payload
    },
    region: {
      latitude: {
        $set: action.payload.latitude
      },
      longitude: {
        $set: action.payload.longitude
      },
      latitudeDelta: {
        $set: LATITUDE_DELTA
      },
      longitudeDelta: {
        $set: LONGITUDE_DELTA
      }
    },
  })
}

function handleUpdateCenterMarker(state, action) {
  let actionLat = action.payload.latitude
  let actionLon = action.payload.longitude
  let stateLat = state.userCoord.latitude
  let stateLon = state.userCoord.longitude

  let displayCenterMarker
  if (action.payload.notDisplayingCenterMarker) {
    displayCenterMarker = false
  } else {
    displayCenterMarker = (stateLat.toFixed(6) === actionLat.toFixed(6) && stateLon.toFixed(6) === actionLon.toFixed(6)) ? false : true
  }

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
      $set: displayCenterMarker
    },
  })
}

// determine current parking rate category
function getPresent() {
  let present = new Date()

  if (present.getDay() == 0 && present.getHours() >= 9 && present.getHours() <= 18) {
    return SUN_9_6
  } else if (present.getDay() == 0 && present.getHours() > 18 && present.getHours() <= 20) {
    return SUN_6_PLUS
  } else if (present.getDay() == 6 && present.getHours() >= 9 && present.getHours() <= 18) {
    return SAT_9_6
  } else if (present.getDay() == 6 && present.getHours() > 18 && present.getHours() <= 20) {
    return SAT_6_PLUS
  } else if (present.getHours() >= 9 && present.getHours() <= 18) {
    return WEEKDAY_9_6
  } else if (present.getHours() > 18 && present.getHours() <= 20) {
    return WEEKDAY_6_PLUS
  } else {
    return FREE_PARKING
  }
}

function parseTimeLimit(timeLimit) {
  if (timeLimit.startsWith('no time limit')) {
    return NO_TIME_LIMIT_TEXT
  } else if (timeLimit.startsWith('until 9am')) {
    return FREE_PARKING_LIMIT
  } else {
    if (timeLimit == 1) {
      return '1 hour'
    } else {
      let timeLimitSubStr = timeLimit.substring(0, 1)
      return timeLimitSubStr + ' hours'
    }
  }
}

function parseRate(rate) {
  return rate === '0' ? 'free' : `$${rate} per hour`
}

function processParkingSpotDesc(parkingSpots, lowestRate, highestRate) {
  let present = getPresent()

  // TODO: handle FREE_PARKING and processed variable
  for (let i = 0; i < parkingSpots.length; i++) {
    if (parkingSpots[i] && parkingSpots[i].properties) {
      let parkingSpotCurrentRate = parkingSpots[i].properties[present].rate
      let parkingSpotCurrentTimeLimit = parkingSpots[i].properties[present].limit

      if (parkingSpotCurrentRate < lowestRate) {
        lowestRate = parkingSpots[i].properties[present].rate
      }

      if (parkingSpotCurrentRate > highestRate) {
        highestRate = parkingSpots[i].properties[present].rate
      }

      parkingSpots[i].properties.presentRate = parkingSpotCurrentRate
      parkingSpots[i].properties.presentRateText = parseRate(parkingSpotCurrentRate)
      parkingSpots[i].properties.presentTimeLimitText = parseTimeLimit(parkingSpotCurrentTimeLimit)
    }
  }

  return {parkingSpots, lowestRate, highestRate}
}

// filter parking spots out if its ID already exists in parkingSpotIDSet
function filterParkingSpot(state, parkingSpots) {
  const parkingSpotSet = parkingSpots.filter((parkingSpot) => {
    if (state.parkingSpotIDSet && state.parkingSpotIDSet.has(parkingSpot.id)) {
      return false
    } else {
      state.parkingSpotIDSet.add(parkingSpot.id)
      return true
    }
  })
  return parkingSpotSet
}

// merge parking spots local data and data from server
function handleDisplayNearbyParkingSpots(state, action) {
  let parkingSpotSet = filterParkingSpot(state, action.payload)
  let parkingSpots = [...state.nearbyParkingSpots, ...parkingSpotSet]
  let processedRes = processParkingSpotDesc(parkingSpots, state.lowestRate, state.highestRate)

  return update(state, {
    processingParkingSpots: {
      $set: false
    },
    nearbyParkingSpots: {
      $set: processedRes.parkingSpots
    },
    lowestRate: {
      $set: processedRes.lowestRate
    },
    highestRate: {
      $set: processedRes.highestRate
    }
  })
}

function handleSetMarkerPressed(state) {
  return update(state, {
    calloutPressed: {
      $set: true
    },
    displayCentreMarker: {
      $set: false
    }
  })
}

function handleShowToast(state, action) {
  ToastAndroid.showWithGravityAndOffset(
    action.payload.text,
    ToastAndroid.SHORT,
    ToastAndroid.TOP,
    TOAST_HEADER_X_OFFSET,
    TOAST_HEADER_Y_OFFSET
  )
  return update(state, {})
}

//-------------------------------
// Initialization
//-------------------------------
export const initialState = {
  calloutPressed: false,
  displayCentreMarker: false,
  displayLoader: false,
  displaySearchBar: false,
  gettingCurrentLocation: false,
  highestRate: MAX_PARKING_RATE,
  inputData: {},
  locationPermission: false,
  lowestRate: MIN_PARKING_RATE,
  processingParkingSpots: false,
  nearbyParkingSpots: [],
  parkingSpotIDSet: new Set(),
  locationPredictions: [],
  lastSearchCoordinates: {
    latitude: 0,
    longitude: 0
  },
  region: {
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  },
  resultTypes: {},
  selectedAddress: {},
  userCoord: {
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  },
}

export function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}