import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import { createLogger } from 'redux-logger';

const log = createLogger({diff: true, collapsed: true});
const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (err) {
    console.log('error: ', error);
  }
}
export default (initialState = {}) => {
  const middleware = [thunk, log];
  const enhancers = [];

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')
      store.replaceReducer(nextReducer)
    })
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    ) // Composes functions from right to left.
  );

  // store.subscribe(() => {
  //   console.log('store changed', store.getState());
  // })
  return store;
}