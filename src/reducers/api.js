
import { RECEIVE_DATA } from '../actions';

const api = (state = { list: [] }, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        list: action.data,
      });
    default:
      return state;
  }
};

export default api;
