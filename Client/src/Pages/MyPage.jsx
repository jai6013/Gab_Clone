import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Profile } from "../Components/Profile/Profile";
import { AuthContext } from "../Contexts/AuthContext";
import { Theme } from "../Styles/Theme";

export const MyPage = () => {
  const { user, token } = useContext(AuthContext);
  const [timeline, setTimeline] = useState();

  const fetchData = async () => {
    await axios
      .get(`http://localhost:2222/posts/user/timeline`, {
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
        <Profile
          cover_pic={user?.cover_pic}
          profile_pic={user?.profile_pic}
          display_name={user?.display_name}
          username={user?.username}
          isVerified={user?.isVerified}
          followers={user?.followers?.length}
          following={user?.following?.length}
          bio={user?.bio}
          createdAt={user?.createdAt}
          posts={timeline}
          isMyProfile={true}
        />
      </Theme>
    </>
  );
};
