import React, { useContext } from "react";
import { Navbar } from "../Components/Navbar/NavBar";
import BottomNav from "../Components/Navbar/BottomNav";
import { Profile } from "../Components/Profile/Profile";
import { AuthContext } from "../Contexts/AuthContext";
import { Theme } from "../Styles/Theme";

export const MyPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Theme>
        <Navbar />
        <BottomNav />
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
