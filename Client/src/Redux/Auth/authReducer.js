import { loadData, saveData } from "../Utils/localstorage";
import { SIGNOUT, SIGNUP, SIGNIN } from "./actionTypes";
const token = loadData("token");

const initState = {
  isLoggedIn: token ? true : false,
  token: token || "",
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNIN: {
      saveData("token", payload);
      return {
        ...state,
        isLoggedIn: true,
        token: payload,
      };
    }
    case SIGNOUT: {
      return {
        ...state,
        isLoggedIn: false,
        token: "",
      };
    }
    case SIGNUP: {
      saveData("token", payload);
      return {
        ...state,
        isLoggedIn: true,
        token: payload,
      };
    }
    default: {
      return state;
    }
  }
};
