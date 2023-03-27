import { combineReducers } from 'redux';
import auth from './auth';
import profile from './userReducers';

export default combineReducers({
    auth,
    profile
});