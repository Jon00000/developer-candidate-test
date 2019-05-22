
import * as service from '../services/queryFromSevrvice';

export default {

  namespace: 'people',

  state: [],

  subscriptions: {
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call (service.query, payload)
      yield put(
        {
          type: 'retrieve',
          payload: data
        });
    },
  },

  reducers: {
    'retrieve'(state, action) {
      return [...action.payload];
    }
  },

};
