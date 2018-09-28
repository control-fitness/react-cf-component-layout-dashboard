
import { TOGGLE } from '../actions';

const form = (state = { show: false }, action) => {
  switch (action.type) {
    case TOGGLE:
      return Object.assign({}, state, {
        show: !state.show,
      });
    default:
      return state;
  }
};

export default form;
