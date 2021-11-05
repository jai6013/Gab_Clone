import { createStore } from "redux";
import { authReducer } from "./Auth/authReducer";

export const store = createStore(authReducer);
