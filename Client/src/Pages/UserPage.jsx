import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Navbar } from "../Components/Navbar/Navbar";
import { Profile } from "../Components/Profile/Profile";
import { AuthContext } from "../Contexts/AuthContext";
import { Theme } from "../Styles/Theme";

export const UserPage = () => {
  const { userid } = useParams();
  const [user, setUser] = useState();
  const { posts } = useContext(AuthContext);
  const fetchUserDetails = async () => {
    await axios
      .get(`https://secure-ravine-45527.herokuapp.com/users/${userid}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <Theme>
      <Navbar />
      <Profile
        cover_pic={user?.cover_pic}
        profile_pic={user?.profile_pic}
        display_name={user?.display_name}
        username={user?.username}
        isVerified={user?.isVerified}
        posts={posts}
      />
    </Theme>
  );
};
