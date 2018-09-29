import { combineReducers } from 'redux';
import api from './api';
import form from './form';
import profile from './profile';

export default combineReducers({
  api,
  form,
  profile,
});
