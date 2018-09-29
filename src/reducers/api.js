
import { RECEIVE_LIST, RECEIVE_USER } from '../actions';

const api = (state = { list: [], user: {} }, action) => {
  switch (action.type) {
    case RECEIVE_LIST:
      return Object.assign({}, state, {
        list: action.data,
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        user: action.data,
      });
    default:
      return state;
  }
};

export default api;
