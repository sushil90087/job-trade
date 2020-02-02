import { USER_LOGIN, SWITCH_LOGIN } from "./actionTypes";

const initialState = {
  userLogged: false,
  isLogin: true
};

function reducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case USER_LOGIN:
      newState.userLogged = true;
      return newState;
    case SWITCH_LOGIN:
      newState.isLogin = action.payload;
      return newState;
    default:
      return state;
  }
}

export default reducer;
