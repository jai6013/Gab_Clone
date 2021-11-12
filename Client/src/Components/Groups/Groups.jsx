import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import {
  AboutDiv,
  AboutItem,
  AboutRow,
  Container,
  GroupDetailsDiv,
  GroupFollowersCount,
  GroupImg,
  GroupImgDiv,
  GroupTitle,
  GroupWrapper,
  IconDiv,
  IconDivText,
  Left,
  LeftNavDiv,
  LeftNavItem,
  LeftPanelHeading,
  LeftSmallHeading,
  Middle,
  OffsetNav,
  Right,
  RightSideCard,
  ShowAllDiv,
} from "./GroupStyles";
import { GroupPost } from "../GroupPost/GroupPost";
import { AuthContext } from "../../Contexts/AuthContext";
import { useHistory } from "react-router";
export const Groups = () => {
  // const posts = [
  //   {
  //     isLiked: true,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: false,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: true,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: true,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: false,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: true,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: false,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: true,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: true,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: true,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  //   {
  //     isLiked: true,
  //     name: "name here",
  //     username: "username",
  //     profile_pic: "https://gab.com/avatars/original/missing.png",
  //     time: "1 hr .",
  //     postBody: ` is simply dummy text of the printing and typesetting industry. Lorem
  //     Ipsum has been the industry's standard dummy text ever since the 1500s,
  //     when an unknown printer took a galley of type and scrambled it to make a
  //     type specimen book. It has survived not only five centuries, but also
  //     the leap into electronic typesetting, remaining essentially unchanged.
  //     It was popularised in the 1960s with the release of Letraset sheets
  //     containing Lorem Ipsum passages, and more recently with desktop
  //     publishing software like Aldus PageMaker including versions of Lorem
  //     Ipsum.`,
  //   },
  // ];
  const { user, posts, isLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  console.log(user?.groups);
  return (
    <div>
      <OffsetNav />
      <Container>
        <Left>
          <LeftPanelHeading>Groups</LeftPanelHeading>
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
          {posts?.map((post) => (
            <GroupPost
              key={post?._id}
              isLiked={post?.likes?.includes(user?._id)}
              name={post?.user_id?.display_name}
              username={post?.user_id?.username}
              postBody={post?.content}
              time={"2hr ."}
              profile_pic={post?.user_id?.profile_pic}
              isVerified={post?.user_id?.isVerified}
              likes={post?.likes?.length}
              comments={post?.comments?.length}
              id={post?._id}
              userid={post?.user_id?._id}
            />
          ))}
        </Middle>
        {isLoggedIn ? (
          <Right>
            <RightSideCard>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <div>Groups you're in</div>
                <ShowAllDiv>Show all</ShowAllDiv>
              </div>
            </RightSideCard>

            <RightSideCard>
              {user?.groups.map((group) => (
                <GroupWrapper>
                  <GroupImgDiv>
                    <GroupImg src={group?.cover_photo} alt="group cover" />
                  </GroupImgDiv>
                  <GroupDetailsDiv>
                    <GroupTitle>{group?.group_name}</GroupTitle>
                    <GroupFollowersCount>
                      {group?.members?.length} Members
                    </GroupFollowersCount>
                  </GroupDetailsDiv>
                </GroupWrapper>
              ))}
            </RightSideCard>
            <AboutDiv>
              <AboutRow>
                <AboutItem>Help</AboutItem>.<AboutItem>Security</AboutItem>.
                <AboutItem>About</AboutItem>.<AboutItem>Investors</AboutItem>
                <AboutItem>Terms of sale</AboutItem>.<AboutItem>DMCA</AboutItem>
              </AboutRow>

              <AboutRow>
                <AboutItem>Term sof service</AboutItem>.
                <AboutItem>Privacy policy</AboutItem>.
                <AboutItem>Status</AboutItem>.<AboutItem>Logout</AboutItem>
              </AboutRow>
              <AboutRow>
                <AboutItem>© 2021 Gab AI, Inc.</AboutItem>
              </AboutRow>
              <AboutRow>
                <AboutItem>Gab Social is open source software</AboutItem>
                <AboutItem>code.gab</AboutItem>
              </AboutRow>
            </AboutDiv>
          </Right>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};
