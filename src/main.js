import React from 'react';

import createStore from './store/createStore';
import AppContainer from './AppContainer';

const initialState = window.__INITIAL_STATE__;
export const store = createStore(initialState);

export default class Root extends React.Component {
  renderApp(){
    return (
      <AppContainer store={store} />
    );
  }

  render(){
    return this.renderApp();
  }
}