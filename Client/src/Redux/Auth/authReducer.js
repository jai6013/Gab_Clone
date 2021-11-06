import { loadData, saveData } from "../Utils/localstorage";
import {
  LOGOUT,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./actionTypes";
const token = loadData("token");

const initState = {
  isLoggedIn: token ? true : false,
  token: token || "",
  isLoading: false,
  isError: false,
  user: {},
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGIN_SUCCESS:
      saveData("token", payload.token);

      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        isError: false,
        isLoading: false,
        user: payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isError: true,
        token: "",
        isLoading: false,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoggedIn: false,
        isError: false,
        isLoading: false,
        token: "",
      };

    default: {
      return state;
    }
  }
};
