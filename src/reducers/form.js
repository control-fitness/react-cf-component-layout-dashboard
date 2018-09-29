
import { TOGGLE, OPEN_LOGOUT } from '../actions';

const form = (state = { show: false, openLogout: false }, action) => {
  switch (action.type) {
    case TOGGLE:
      return Object.assign({}, state, {
        show: !state.show,
      });
    case OPEN_LOGOUT:
      return Object.assign({}, state, {
        openLogout: action.open,
      });
    default:
      return state;
  }
};

export default form;
