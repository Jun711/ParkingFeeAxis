import update from "immutability-helper/index"

export function handleLoadFaqList(state, action) {
  return update(state, {
    faqLoaded: {
      $set: true
    },
    faqList: {
      $set: action.payload
    },
    loadingError: {
      $set: false
    }
  })
}

export function handleLoadFaqListError(state) {
  return update(state, {
    faqLoaded: {
      $set: false
    },
    loadingError: {
      $set: true
    }
  })
}