import update from "immutability-helper/index";

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

//-------------------------------
// Utility fns
//-------------------------------
function toggleStateKey(state, key, action) {
  return update(state, {
    [key]: {
      $set: action.payload ? action.payload.value : !state.calloutPressed
    }
  })
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
