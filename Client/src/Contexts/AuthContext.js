import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  logoutUser,
  registerUser,
  getLoggedinUser,
} from "../Redux/Auth/actions";
import { getHotPosts, getFeedPosts, likeapost } from "../Redux/Posts/actions";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { userState, postState } = useSelector((state) => state);
  const { isLoggedIn, token, user } = userState;
  const { posts } = postState;

  console.log(user, "used redux");

  const dispatch = useDispatch();
  // handle like dispatches like/dislike action

  const handleLike = (id) => {
    const action = likeapost({ id, token });
    dispatch(action);
  };

  // handleLogin dispatches login action

  const handleLogin = async () => {
    const data = { email: "srikanth@gab.com", password: "srikanth" };
    const loginAction = loginUser(data);
    dispatch(loginAction);
  };

  // handleSignup dispatches signup action
  const handleSignup = async (data) => {
    const signupAction = registerUser(data);
    dispatch(signupAction);
  };

  // handleSignout dispatches signout action
  const handleSignout = async () => {
    const logoutAction = logoutUser();
    dispatch(logoutAction);
  };

  // fetchUser dispatches user fetch action

  const fetchUser = async () => {
    const action = getLoggedinUser(token);
    dispatch(action);
  };

  // fetchPosts dispatches posts fetching action

  const fetchPosts = async () => {
    if (!isLoggedIn) {
      const action = getHotPosts();
      dispatch(action);
    } else {
      console.log(token, "in context");
      const action = getFeedPosts(token);
      dispatch(action);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchUser();
      fetchPosts();
    } else {
      fetchPosts();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        handleLogin,
        handleSignup,
        user,
        token,
        handleSignout,
        posts,
        handleLike,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
