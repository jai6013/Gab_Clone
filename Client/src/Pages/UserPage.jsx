import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Navbar } from "../Components/Navbar/NavBar";
import BottomNav from "../Components/Navbar/BottomNav";
import { Profile } from "../Components/Profile/Profile";
import { Theme } from "../Styles/Theme";

export const UserPage = () => {
  const { userid } = useParams();
  const [user, setUser] = useState();

  const fetchData = async () => {
    await axios.get(`http://localhost:2222/${userid}`).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  };

  useEffect(() => {
    fetchData();
    console.log(user);
  }, []);
  return !user ? (
    <></>
  ) : (
    <Theme>
      <Navbar />
      <BottomNav />
      <Profile
        cover_pic={user?.cover_pic}
        profile_pic={user?.profile_pic}
        display_name={user?.display_name}
        username={user?.username}
        isVerified={user?.isVerified}
        posts={user?.posts}
        followers={user?.followers}
        following={user?.following}
        bio={user?.bio}
        createdAt={user?.createdAt}
        isMyProfile={false}
      />
    </Theme>
  );
};
