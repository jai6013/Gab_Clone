import React, { useContext } from "react";
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
  PostBtn,
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
import { AuthContext } from "../../Contexts/AuthContext";
import { useHistory } from "react-router";
export const Home = () => {
  const { user, posts, isLoggedIn } = useContext(AuthContext);
  const history = useHistory();

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
          {isLoggedIn && (
            <PostDiv>
              <PostPicTop>
                <PostPicDiv>
                  <PostPic src={user?.profile_pic} />
                </PostPicDiv>
              </PostPicTop>
              <PostPicDivider />
              <PostInput placeholder="What's on your mind?" />
              <PostBtn>Post</PostBtn>
            </PostDiv>
          )}

          {posts?.map((post) => (
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
          ))}
        </Middle>
        {isLoggedIn ? (
          <Right>
            <RightSideCard>
              <ProfileCard>
                <ProfileCardDiv background={user?.cover_pic}></ProfileCardDiv>

                <ProfileCardDiv>
                  <ProfileCardPicDiv onClick={() => history.push("/me")}>
                    <ProfileCardPic
                      src={
                        user?.profile_pic ||
                        "https://gab.com/avatars/original/missing.png"
                      }
                    />
                  </ProfileCardPicDiv>
                  <ProfileCardName onClick={() => history.push("/me")}>
                    <ProfileCardNameDiv>
                      {user?.display_name}
                    </ProfileCardNameDiv>
                    <ProfileCardUsernameDiv>
                      @{user?.username}
                    </ProfileCardUsernameDiv>
                  </ProfileCardName>
                </ProfileCardDiv>

                <ProfileCardDiv>
                  <ProfileCardStatDiv>
                    <ProfileCardStat onClick={() => history.push("/me")}>
                      {user?.posts?.length}
                    </ProfileCardStat>
                    <ProfileCardStatName onClick={() => history.push("/me")}>
                      Gabs
                    </ProfileCardStatName>
                  </ProfileCardStatDiv>

                  <ProfileCardStatDiv>
                    <ProfileCardStat onClick={() => history.push("/me")}>
                      {user?.followers?.length}
                    </ProfileCardStat>
                    <ProfileCardStatName onClick={() => history.push("/me")}>
                      Followers
                    </ProfileCardStatName>
                  </ProfileCardStatDiv>

                  <ProfileCardStatDiv>
                    <ProfileCardStat onClick={() => history.push("/me")}>
                      {user?.following?.length}
                    </ProfileCardStat>
                    <ProfileCardStatName onClick={() => history.push("/me")}>
                      Following
                    </ProfileCardStatName>
                  </ProfileCardStatDiv>
                </ProfileCardDiv>
              </ProfileCard>
            </RightSideCard>
          </Right>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};
