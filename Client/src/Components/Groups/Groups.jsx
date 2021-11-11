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
} from "./GroupStyles";
import { GroupPost } from "../GroupPost/GroupPost";
import { NoGroupJoined } from "../GroupPost/GroupPost";
import { NoGroupInstructions } from "../GroupPost/NoGroupInstructions";
import { AuthContext } from "../../Contexts/AuthContext";
import { useHistory } from "react-router";
export const Groups = ({
  profile_pic = "https://gab.com/avatars/original/missing.png",
  name = "bvsrtemp",
  username = "bvsr",
}) => {
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

        {
            //  GROUP JOINING INSTRUCTIONS

        }


          <NoGroupJoined/>
        

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
            <RightSideCard style={{marginLeft:"0",paddingLeft:"0", marginRight:"0",paddingRight:"0", paddingBottom:"0"}}>
           
              <h1 style={{marginLeft:"8px"}}>Sponsored</h1>
              <div style={{backgroundColor:"rgb(240,242,245)",marginTop:"8px", marginLeft:"0", paddingLeft:"0"}}>
              <ul >
              <li  style={{display:"inline", marginRight:"2px"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">Help</a></li>
              <li  style={{display:"inline"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">Security</a></li>
              <li  style={{display:"inline"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">About</a></li>
              <li  style={{display:"inline"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">Investors</a></li>
              <li  style={{display:"inline"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">Terms of Sale</a></li>
              <li  style={{display:"inline"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">DMCA</a></li>
              <li  style={{display:"inline"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">Terms of Service</a></li>
              <li  style={{display:"inline"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">Privacy Policy</a></li>
              <li  style={{display:"inline"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">Status</a></li>
              <li  style={{display:"inline"}}>&#8227; <a href="https://google.com" rel="noreferrer" target="_blank">Logout</a></li>
           </ul>
              </div>
             
              
            </RightSideCard>
          </Right>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

