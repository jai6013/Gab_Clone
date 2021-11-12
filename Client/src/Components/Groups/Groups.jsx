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

export const Groups = ({ page }) => {
  const { user, posts, isLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  return (
    <div>
      <OffsetNav />
      <Container>
        <Left>
          <LeftPanelHeading>Explore</LeftPanelHeading>
          <LeftSmallHeading>Menu</LeftSmallHeading>
          <LeftNavDiv>
            <LeftNavItem isSelected={page === "Home"}>
              <IconDiv>
                <AiFillHome size="1rem" />
              </IconDiv>
              <IconDivText>Home</IconDivText>
            </LeftNavItem>

            <LeftNavItem isSelected={page === "Notifications"}>
              <IconDiv>
                <MdNotifications size="1rem" />
              </IconDiv>
              <IconDivText>Notifications</IconDivText>
            </LeftNavItem>

            <LeftNavItem isSelected={page === "Chats"}>
              <IconDiv>
                <IoChatbubblesSharp size="1rem" />
              </IconDiv>
              <IconDivText>Chats</IconDivText>
            </LeftNavItem>

            <LeftNavItem isSelected={page === "Groups"}>
              <IconDiv>
                <AiFillHome size="1rem" />
              </IconDiv>
              <IconDivText>Groups</IconDivText>
            </LeftNavItem>

            <LeftNavItem isSelected={page === "Explore"}>
              <IconDiv>
                <BsGlobe2 size="1rem" />
              </IconDiv>
              <IconDivText>Explore</IconDivText>
            </LeftNavItem>

            <LeftNavItem isSelected={page === "News"}>
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
                <ShowAllDiv
                  onClick={() => {
                    history.push("/groups/browse/member");
                  }}
                >
                  Show all
                </ShowAllDiv>
              </div>
            </RightSideCard>

            <RightSideCard>
              {user?.groups?.map((group) => (
                <GroupWrapper
                  onClick={() => history.push(`/groups/${group?._id}`)}
                >
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
