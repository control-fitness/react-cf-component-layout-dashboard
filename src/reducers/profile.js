
import { PROFILE_LOGOUT } from '../actions';

const profile = (state = { logout: false }, action) => {
  switch (action.type) {
    case PROFILE_LOGOUT:
      return Object.assign({}, state, {
        logout: action.logout,
      });
    default:
      return state;
  }
};

export default profile;
