import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
userList:usersReducer
});

export default rootReducer;