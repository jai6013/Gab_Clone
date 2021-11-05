import React from "react";
import {
  CoverContainer,
  CoverPic,
  HeadSection,
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
} from "./ProfileStyles";
import { MdVerified } from "react-icons/md";
import { Post } from "../Post/Post";

export const Profile = ({
  cover_pic,
  profile_pic,
  display_name,
  username,
  isVerified,
  posts,
}) => {
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
          <ProfileNavRight>
            <OutlineBtn>Edit Profile</OutlineBtn>
          </ProfileNavRight>
        </ProfileNav>
      </HeadSection>

      <ProfileBody>
        <ProfileBodyLeftDiv>
          <Post />
        </ProfileBodyLeftDiv>
        <ProfileBodyRightDiv>
          {posts?.map((post) => (
            <Post />
          ))}
        </ProfileBodyRightDiv>
      </ProfileBody>
    </>
  );
};
