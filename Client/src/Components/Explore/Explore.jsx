import React, { useContext,useState,useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import {data} from "./groupdata"
import axios from "axios";
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
  LeftDiv,
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
  FeaturedGroups,
  FeatureHeading,
  ShowAll,
  FeatureWrapper,
  GroupImage,
  GroupName,
  GroupMembers,
  ShowAllButton
} from "./ExploreStyles";
import { Post } from "../Post/Post";
import { AuthContext } from "../../Contexts/AuthContext";
import { useHistory } from "react-router";
export const Explore = ({
  profile_pic = "https://gab.com/avatars/original/missing.png",
  name = "bvsrtemp",
  username = "bvsr",
}) => {
 
  const { user, posts, isLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const [groupData,setGroupData]=useState([]);

useEffect(()=>{
  axios.get("https://secure-ravine-45527.herokuapp.com")
  .then((res)=>console.log(res.data))
  
},[])

  return (
    <div>
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
        <MiddleTopHeading>Popular posts across Gab</MiddleTopHeading>

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
       <Right>
       <RightSideCard>
       <FeaturedGroups>
         <FeatureHeading>Featured Groups</FeatureHeading>
         <ShowAll>Show All</ShowAll>
       </FeaturedGroups>
       {data.map((item,index)=>{
         return <FeatureWrapper key={index}>
         <GroupImage imgUrl={item.img}></GroupImage>
         <GroupName>{item.name}</GroupName>
         <GroupMembers>{item.members}</GroupMembers>
         </FeatureWrapper>})}
        <ShowAllButton>Show All Groups</ShowAllButton>
       </RightSideCard>
       </Right>
       
      </Container>
    </div>
  );
};
