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