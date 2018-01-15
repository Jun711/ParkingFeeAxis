import update from "immutability-helper/index";
import { initialState } from "./home";

export function handleToggleSearchBar(state) {
  return update(state, {
    displaySearchBar: {
      $set: !state.displaySearchBar
    }
  })
}

export function handleMapPressed(state) {
  return update(state, {
    calloutPressed: {
      $set: false
    },
    displayCentreMarker: {
      $set: true
    },
    displaySearchBar: {
      $set: false
    }
  })
}