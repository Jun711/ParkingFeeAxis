export default function timeout(promise, ms = 30000) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('timeout'))
    }, ms)
    promise.then(resolve, reject)
  })
}