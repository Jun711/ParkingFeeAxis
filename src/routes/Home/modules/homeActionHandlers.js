import update from "immutability-helper/index";
import { initialState } from "./home";

export function handleHeaderPressed(state) {
  return update(state, {
    displaySearchBar: {
      $set: !initialState.displaySearchBar
    }
  })
}
