import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "./Auth/authReducer";
import { postReducer } from "./Posts/postReducer";

const rootReducer = combineReducers({
  userState: authReducer,
  postState: postReducer,
});

const middleware = (state) => (next) => (action) => {
  return typeof action === "function" ? action(state.dispatch) : next(action);
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancer = composeEnhancers(applyMiddleware(middleware));

export const store = createStore(rootReducer, enhancer);
