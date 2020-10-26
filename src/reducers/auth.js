import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_SUCCESS } from '../actionTypes/loginActionTypes';
// import token from '../functions/token';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        // config: { headers: { Authorization: `Bearer ${action.payload.token}` } },
        user: [action.payload],
        error: '',
      };
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        // config: { headers: { Authorization: `Bearer ${token.getToken()}` } },
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
