import React, { useContext } from "react";
import {
  Bio,
  BioHead,
  CoverContainer,
  CoverPic,
  HeadSection,
  Hr,
  LeftPanelDiv,
  MemberSince,
  OutlineBtn,
  ProfileBody,
  ProfileBodyLeftDiv,
  ProfileBodyRightDiv,
  ProfileHandle,
  ProfileName,
  ProfileNav,
  ProfileNavDiv,
  ProfileNavLeft,
  ProfileNavLeftItem,
  ProfileNavRight,
  ProfilePic,
  ProfilePicDiv,
  Stat,
  StatCount,
  StatName,
  StatsDiv,
} from "./ProfileStyles";
import { MdVerified } from "react-icons/md";
import { Post } from "../Post/Post";
import { AuthContext } from "../../Contexts/AuthContext";

export const Profile = ({
  cover_pic,
  profile_pic,
  display_name,
  username,
  isVerified,
  posts,
  followers,
  following,
  bio,
  createdAt,
  isMyProfile,
}) => {
  const { user } = useContext(AuthContext);
  console.log(posts);
  return (
    <>
      <HeadSection>
        <CoverContainer>
          <CoverPic src={cover_pic} alt="cover" />
        </CoverContainer>
        <ProfileNavDiv>
          <ProfilePicDiv>
            <ProfilePic alt="profile pic" src={profile_pic} />
          </ProfilePicDiv>
          <div style={{ height: "100px" }}>
            <ProfileName>
              {display_name}
              {isVerified && (
                <MdVerified
                  color="#3E99ED"
                  style={{ paddingTop: "5px", marginLeft: "5px" }}
                />
              )}
            </ProfileName>
            <ProfileHandle>@{username}</ProfileHandle>
          </div>
        </ProfileNavDiv>
        <ProfileNav>
          <ProfileNavLeft>
            <ProfileNavLeftItem selected>Timeline</ProfileNavLeftItem>
            <ProfileNavLeftItem>Comments</ProfileNavLeftItem>
            <ProfileNavLeftItem>Photos</ProfileNavLeftItem>
            <ProfileNavLeftItem>Videos</ProfileNavLeftItem>
            <ProfileNavLeftItem>Likes</ProfileNavLeftItem>
            <ProfileNavLeftItem>Bookmarks</ProfileNavLeftItem>
          </ProfileNavLeft>
          {isMyProfile ? (
            <ProfileNavRight>
              <OutlineBtn>Edit Profile</OutlineBtn>
            </ProfileNavRight>
          ) : followers?.some((friend) => friend?._id === user?._id) ? (
            <ProfileNavRight>
              <OutlineBtn>Following</OutlineBtn>
            </ProfileNavRight>
          ) : (
            <ProfileNavRight>
              <OutlineBtn>Follow</OutlineBtn>
            </ProfileNavRight>
          )}
        </ProfileNav>
      </HeadSection>

      <ProfileBody>
        <ProfileBodyLeftDiv>
          <LeftPanelDiv>
            <StatsDiv>
              <Stat>
                <StatCount>{posts?.length}</StatCount>
                <StatName>Gabs</StatName>
              </Stat>
              <Stat>
                <StatCount>{followers?.length}</StatCount>
                <StatName>Followers</StatName>
              </Stat>
              <Stat>
                <StatCount>{following?.length}</StatCount>
                <StatName>Following</StatName>
              </Stat>
            </StatsDiv>
          </LeftPanelDiv>
          <LeftPanelDiv>
            <BioHead>About</BioHead>
            <Bio>{bio}</Bio>
            <Hr />
            <MemberSince>Member since {createdAt?.slice(0, 4)}</MemberSince>
            <Hr />
          </LeftPanelDiv>
        </ProfileBodyLeftDiv>

        <ProfileBodyRightDiv>
          {posts?.map((post) => (
            <Post
              key={post?._id}
              name={display_name}
              username={username}
              postBody={post?.content}
              time={"2hr ."}
              profile_pic={profile_pic}
              isVerified={isVerified}
              likes={post?.likes?.length}
              comments={post?.comments?.length}
              id={post?._id}
              userid={post?.user_id?._id}
              isLiked={post?.likes?.includes(user?._id)}
            />
          ))}
        </ProfileBodyRightDiv>
      </ProfileBody>
    </>
  );
};
