import update from "immutability-helper/index"
import { Actions } from 'react-native-router-flux'
import { MARKER_THRESHOLD, MAX_PARKING_RATE, MIN_PARKING_RATE } from "../../../util/constants";

export function handleToggleSearchBar(state) {
  return update(state, {
    displaySearchBar: {
      $set: !state.displaySearchBar
    },
    locationPredictions: {
      $set: []
    }
  })
}

export function handleMapPressed(state) {
  return update(state, {
    calloutPressed: {
      $set: false
    },
    displayCentreMarker: {
      $set: state.displayCentreMarker
    },
    displaySearchBar: {
      $set: false
    }
  })
}

export function handleDisplayCalloutDetail(state, action) {
  Actions.parkingSpot({
    calloutDetail: action.payload.calloutDetail,
    presentRateText: action.payload.presentRateText,
    presentTimeLimitText: action.payload.presentTimeLimitText
  })
  return update(state, {})
}

export function handleUpdateLastSearch(state, action) {
  if (action.payload) {
    return update(state, {
      lastSearchCoordinates: {
        latitude: {
          $set: action.payload.latitude
        },
        longitude: {
          $set: action.payload.longitude
        }
      }
    })
  } else {
    return update(state, {})
  }
}

export function handleToggleCentreMarker(state, action) {
  return update(state, {
    displayCentreMarker: {
      $set: action.payload ? action.payload.value : !state.displayCentreMarker
    }
  })
}

export function handleToggleLoader(state, action) {
  return update(state, {
    displayLoader: {
      $set: action.payload ? action.payload.value : !state.displayLoader
    }
  })
}

export function handleToggleCallout(state, action) {
  return toggleStateKey(state, 'calloutPressed', action)
}

export function handleRemoveMarkersPostThreshold(state) {
  if (state.parkingSpotIDSet.size > MARKER_THRESHOLD) {
    let removeCount = state.parkingSpotIDSet.size - MARKER_THRESHOLD
    let reducedParkingSpotIDSet = new Set([...state.parkingSpotIDSet].slice(removeCount))
    let reducedParkingSpots = state.nearbyParkingSpots.slice(removeCount)

    return update(state, {
      parkingSpotIDSet: {
        $set: reducedParkingSpotIDSet
      },
      nearbyParkingSpots: {
        $set: reducedParkingSpots
      },
      highestRate: {
        $set: MAX_PARKING_RATE
      },
      lowestRate: {
        $set: MIN_PARKING_RATE
      }
    })
  } else {
    return update(state, {})
  }
}

export function handleProcessingParkingSpots(state, action) {
  return update(state, {
    processingParkingSpots: {
      $set: action.payload
    }
  })
}

//-------------------------------
// Utility fns
//-------------------------------
function toggleStateKey(state, key, action) {
  return update(state, {
    [key]: {
      $set: action.payload ? action.payload.value : !state[key]
    }
  })
}




