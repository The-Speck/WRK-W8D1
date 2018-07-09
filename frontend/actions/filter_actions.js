import * as ApiBenchUtil from '../util/bench_api_util';
import { RECEIVE_BENCHES } from './bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (bounds) => (dispatch) => {
  ApiBenchUtil.fetchBenches(bounds).then((benches) => {
    // debugger
    dispatch({
        type: RECEIVE_BENCHES,
        benches
    });
  });
};
