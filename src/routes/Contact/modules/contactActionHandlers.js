import update from "immutability-helper/index"

const errorMsg = [{
  '_id': 'errorMsg',
  'icon': 'warning',
  'method': 'error',
  'text': 'Error: Contact info loading timeout'
}]

export function handleLoadContactInfo(state, action) {
  return update(state, {
    contactInfoLoaded: {
      $set: true
    },
    contactInfo: {
      $set: action.payload
    }
  })
}

export function handleLoadContactInfoError(state) {
  // TODO can make a global error page
  return update(state, {
    contactInfoLoaded: {
      $set: true
    },
    contactInfo: {
      $set: errorMsg
    }
  })
}