import { USER_LOGIN, SWITCH_LOGIN } from "./actionTypes";
import axios from "axios";

const userLogin = data => {
  return {
    type: USER_LOGIN,
    payload: data
  };
};

export const switchLogin = isLogin => {
  return {
    type: SWITCH_LOGIN,
    payload: isLogin
  }
}

const url = "";

export const loginUser = userData => dispatch => {
  axios
    .post(url, userData)
    .then(response => {
      dispatch(userLogin(response));
    })
    .catch(error => {});
};
