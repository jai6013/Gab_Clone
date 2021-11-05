import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin, signout, signup } from "../Redux/Auth/actions";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const { isLoggedIn, token } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const res = await axios.post(
      "https://secure-ravine-45527.herokuapp.com/users/signin",
      {
        email: "srikanth@gab.com",
        password: "srikanth",
      }
    );
    console.log(res);
    const action = signin(res.data.token);
    setUser(res.data.user);
    dispatch(action);
    fetchPosts();
  };

  const handleSignup = async () => {
    const res = await axios.post(
      "https://secure-ravine-45527.herokuapp.com/users/signup",
      {
        email: "srikanth@gab.com",
        username: "srikanth",
        password: "srikanth",
        display_name: "Srikanth Reddy",
      }
    );

    const action = signup(res.data.token);
    setUser(res.data.user);
    dispatch(action);
  };

  const handleSignout = async () => {
    const action = signout();
    dispatch(action);
  };

  const fetchUser = async () => {
    await axios
      .get("https://secure-ravine-45527.herokuapp.com/users/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  };

  const fetchPosts = async () => {
    if (!isLoggedIn) {
      await axios
        .get("https://secure-ravine-45527.herokuapp.com/posts/top20")
        .then((res) => {
          console.log(res.data.posts);
          setPosts(res.data.posts);
        });
    } else {
      await axios
        .get("https://secure-ravine-45527.herokuapp.com/posts/user/feed", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
        });
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
