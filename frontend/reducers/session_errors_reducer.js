import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultState = [];

const sessionErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return defaultState;
    case RECEIVE_ERRORS:
      return merge([], state, action.errors);
    default:
      return state;
  }
};

export default sessionErrorsReducer;
