import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../Components/NavBar/NavBar";
import BottomNav from "../Components/NavBar/BottomNav";
import { Profile } from "../Components/Profile/Profile";
import { AuthContext } from "../Contexts/AuthContext";
import { Theme } from "../Styles/Theme";

export const MyPage = () => {
  const { user, token } = useContext(AuthContext);
  const [timeline, setTimeline] = useState();

  const fetchData = async () => {
    await axios
      .get(`https://secure-ravine-45527.herokuapp.com/posts/user/timeline`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        console.log(res.data);
        setTimeline(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Theme>
        <Navbar />
        <BottomNav/>
        <Profile
          cover_pic={user?.cover_pic}
          profile_pic={user?.profile_pic}
          display_name={user?.display_name}
          username={user?.username}
          isVerified={user?.isVerified}
          followers={user?.followers}
          following={user?.following}
          bio={user?.bio}
          createdAt={user?.createdAt}
          posts={user?.posts}
          isMyProfile={true}
        />
      </Theme>
    </>
  );
};
