import * as benchApiUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const fetchBenches = () => (dispatch) => {
  return benchApiUtil.fetchBenches().then((benches) => {
    return dispatch(receiveBenches(benches));
  });
};

export const receiveBenches= (benches) => {
  return {
      type: RECEIVE_BENCHES,
      benches
  };
};
