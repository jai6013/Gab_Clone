import { SIGNIN, SIGNOUT, SIGNUP } from "./actionTypes";

/**
 *
 * @param {*} data
 * @returns JSON
 */

export const signin = (data) => {
  return {
    type: SIGNIN,
    payload: data,
  };
};

/**
 *
 * @param {*} data
 * @returns JSON
 */

export const signup = (data) => {
  return {
    type: SIGNUP,
    payload: data,
  };
};

/**
 *
 * @param {*} data
 * @returns JSON
 */

export const signout = (data) => {
  return {
    type: SIGNOUT,
    payload: data,
  };
};
