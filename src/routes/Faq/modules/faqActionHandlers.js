import update from "immutability-helper/index";

const errorMsg = [{'_id': 0, 'text': 'Error: Faq Loading timeout'}];

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
  // TODO can make a global error page
  return update(state, {
    faqLoaded: {
      $set: false
    },
    loadingError: {
      $set: true
    }
  })
}