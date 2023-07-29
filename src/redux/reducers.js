import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, SAVE_USER_DETAILS } from './actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case SAVE_USER_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;