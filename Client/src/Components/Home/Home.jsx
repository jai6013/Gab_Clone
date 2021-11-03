import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import {
  Container,
  IconDiv,
  IconDivText,
  Left,
  LeftNavDiv,
  LeftNavItem,
  LeftPanelHeading,
  LeftSmallHeading,
  Middle,
  OffsetNav,
  PostDiv,
  PostInput,
  PostPic,
  PostPicDiv,
  PostPicDivider,
  PostPicTop,
  ProfileCard,
  ProfileCardDiv,
  ProfileCardName,
  ProfileCardNameDiv,
  ProfileCardPic,
  ProfileCardPicDiv,
  ProfileCardStat,
  ProfileCardStatDiv,
  ProfileCardStatName,
  ProfileCardUsernameDiv,
  Right,
  RightSideCard,
} from "./HomeStyles";
import { Post } from "../Post/Post";

export const Home = ({
  profile_pic = "https://gab.com/avatars/original/missing.png",
  name = "bvsrtemp",
  username = "bvsr",
}) => {
  const posts = [
    {
      isLiked: true,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: false,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: true,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: true,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: false,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: true,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: false,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: true,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: true,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: true,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
    {
      isLiked: true,
      name: "name here",
      username: "username",
      profile_pic: "https://gab.com/avatars/original/missing.png",
      time: "1 hr .",
      postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`,
    },
  ];

  return (
    <div>
      <OffsetNav />
      <Container>
        <Left>
          <LeftPanelHeading>Home</LeftPanelHeading>
          <LeftSmallHeading>Menu</LeftSmallHeading>
          <LeftNavDiv>
            <LeftNavItem>
              <IconDiv>
                <AiFillHome size="1rem" />
              </IconDiv>
              <IconDivText>Home</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <MdNotifications size="1rem" />
              </IconDiv>
              <IconDivText>Notifications</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <IoChatbubblesSharp size="1rem" />
              </IconDiv>
              <IconDivText>Chats</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <AiFillHome size="1rem" />
              </IconDiv>
              <IconDivText>Groups</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <BsGlobe2 size="1rem" />
              </IconDiv>
              <IconDivText>Explore</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <TiDocumentText size="1rem" />
              </IconDiv>
              <IconDivText>News</IconDivText>
            </LeftNavItem>
          </LeftNavDiv>
        </Left>

        <Middle>
          <PostDiv>
            <PostPicTop>
              <PostPicDiv>
                <PostPic src={profile_pic} />
              </PostPicDiv>
            </PostPicTop>
            <PostPicDivider />
            <PostInput placeholder="What's on your mind?" />
          </PostDiv>
          {posts.map((post) => (
            <Post
              isLiked={post.isLiked}
              name={post.name}
              username={post.username}
              postBody={post.postBody}
              time={post.time}
              profile_pic={post.profile_pic}
            />
          ))}
        </Middle>

        <Right>
          <RightSideCard>
            <ProfileCard>
              <ProfileCardDiv background></ProfileCardDiv>

              <ProfileCardDiv>
                <ProfileCardPicDiv>
                  <ProfileCardPic src={profile_pic} />
                </ProfileCardPicDiv>
                <ProfileCardName>
                  <ProfileCardNameDiv>{name}</ProfileCardNameDiv>
                  <ProfileCardUsernameDiv>@{username}</ProfileCardUsernameDiv>
                </ProfileCardName>
              </ProfileCardDiv>

              <ProfileCardDiv>
                <ProfileCardStatDiv>
                  <ProfileCardStat>2</ProfileCardStat>
                  <ProfileCardStatName>Gabs</ProfileCardStatName>
                </ProfileCardStatDiv>

                <ProfileCardStatDiv>
                  <ProfileCardStat>2</ProfileCardStat>
                  <ProfileCardStatName>Followers</ProfileCardStatName>
                </ProfileCardStatDiv>

                <ProfileCardStatDiv>
                  <ProfileCardStat>2</ProfileCardStat>
                  <ProfileCardStatName>Following</ProfileCardStatName>
                </ProfileCardStatDiv>
              </ProfileCardDiv>
            </ProfileCard>
          </RightSideCard>
        </Right>
      </Container>
    </div>
  );
};
