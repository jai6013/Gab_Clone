import {
  LOGOUT,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const addLoginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const addLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const addLoginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

export const registerUser = (payload) => (dispatch) => {};

export const loginUser = (payload) => (dispatch) => {
  const { email, password } = payload;
  const reqAction = addLoginRequest();
  dispatch(reqAction);
  axios
    .post("https://secure-ravine-45527.herokuapp.com/users/signin", {
      email,
      password,
    })
    .then((res) => {
      console.log(res.data.user);
      const sucAction = addLoginSuccess({
        token: res.data.token,
        user: res.data.user,
      });
      dispatch(sucAction);
    })
    .catch((err) => {
      console.log(err);
      const errAction = addLoginFailure(err);
      dispatch(errAction);
    });
};

export const getLoggedinUser = (payload) => (dispatch) => {
  axios
    .get("https://secure-ravine-45527.herokuapp.com/users/me", {
      headers: { Authorization: "Bearer " + payload },
    })
    .then((res) => {
      const sucAction = addLoginSuccess({
        token: payload,
        user: res.data.user,
      });
      dispatch(sucAction);
    })
    .catch((err) => {
      console.log(err);
      const errAction = addLoginFailure(err);
      dispatch(errAction);
    });
};
