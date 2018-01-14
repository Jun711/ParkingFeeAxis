import update from "immutability-helper/index";
import { initialState } from "./home";

export function handleHeaderPressed(state) {
  return update(state, {
    displaySearchBar: {
      $set: !initialState.displaySearchBar
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