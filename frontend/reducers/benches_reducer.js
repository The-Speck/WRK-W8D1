import { RECEIVE_BENCHES } from '../actions/bench_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};
