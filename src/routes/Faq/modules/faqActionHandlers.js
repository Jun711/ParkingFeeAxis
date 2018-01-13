import update from "immutability-helper/index";

const errorMsg = [{'key': 0, 'text': 'Error: Faq Loading timeout'}];

export function handleLoadFaqList(state, action) {
  return update(state, {
    faqLoaded: {
      $set: true
    },
    faqList: {
      $set: action.payload
    }
  })
}

export function handleLoadFaqListError(state) {
  // TODO can make a global error page
  return update(state, {
    faqLoaded: {
      $set: true
    },
    faqList: {
      $set: errorMsg
    }
  })
}