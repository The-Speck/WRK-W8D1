import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TEST IMPORT
// import * as APIUtil from './util/session_api_util';
import * as Actions from './actions/session_actions';
// TEST IMPORT

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = Actions.signup;
  window.login = Actions.login;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
