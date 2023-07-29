export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SAVE_USER_DETAILS = 'SAVE_USER_DETAILS';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const saveUserDetails = (userDetails) => ({
  type: SAVE_USER_DETAILS,
  payload: userDetails,
});