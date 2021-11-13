import React from "react";

import {
  Container,
  IconDiv,
  IconDivText,
  Left,
  MiddleTopHeading,
  LeftNavDiv,
  LeftNavItem,
  LeftPanelHeading,
  LeftSmallHeading,
  Middle,
  OffsetNav,
  Right,
  RightSideCard,
  ShowAllDiv,
  GroupWrapper,
  GroupImgDiv,
  GroupImg,
  GroupDetailsDiv,
  GroupTitle,
  GroupFollowersCount,
  AboutDiv,
  AboutRow,
  AboutItem,
  ShowAllButton,
} from "./PostPageCompStyles";
import { AiFillHome } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { AuthContext } from "../../Contexts/AuthContext";
import { useHistory } from "react-router";
export const PostPageComp = () => {
  const history = useHistory();
  return (
    <div>
      <>
        <OffsetNav />
        <Container>
          <Left>
            <LeftPanelHeading>Explore</LeftPanelHeading>
            <LeftSmallHeading>Menu</LeftSmallHeading>
            <LeftNavDiv>
              <LeftNavItem>
                <IconDiv>
                  <AiFillHome size="1rem" />
                </IconDiv>
                <IconDivText onClick={() => history.push("/")}>
                  Home
                </IconDivText>
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
                <IconDivText onClick={() => history.push("/messanger")}>
                  Chats
                </IconDivText>
              </LeftNavItem>

              <LeftNavItem>
                <IconDiv>
                  <AiFillHome size="1rem" />
                </IconDiv>
                <IconDivText onClick={() => history.push("/groups")}>
                  Groups
                </IconDivText>
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
                <IconDivText onClick={() => history.push("/news")}>
                  News
                </IconDivText>
              </LeftNavItem>
            </LeftNavDiv>
          </Left>

          <Middle>
            <MiddleTopHeading>Popular posts across Gab</MiddleTopHeading>

            {/* {posts?.map((post) => (
            <Post
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
          ))} */}
          </Middle>

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
                <div>Featured groups</div>
                <ShowAllDiv
                  onClick={() => {
                    history.push("/groups/browse/featured");
                  }}
                >
                  Show all
                </ShowAllDiv>
              </div>

              {/* {groupData.slice(0, 10)?.map((group) => (
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
            ))} */}

              <ShowAllButton onClick={() => history.push("/groups")}>
                Show all
              </ShowAllButton>
            </RightSideCard>
            <AboutDiv>
              <AboutRow>
                <AboutItem>Help</AboutItem>.<AboutItem>Security</AboutItem>.
                <AboutItem>About</AboutItem>.<AboutItem>Investors</AboutItem>
                <AboutItem>Terms</AboutItem>.<AboutItem>DMCA</AboutItem>
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
        </Container>
      </>
    </div>
  );
};
