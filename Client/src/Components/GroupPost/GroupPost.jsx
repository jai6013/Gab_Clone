
import React, { useContext } from "react";
import { NoGroupInstructions } from "./NoGroupInstructions";
import { FeaturedGroupNames } from "./NoGroupInstructions";
import {
  CommentBar,
  CommentInput,
  CommentUserPic,
  CommentUserPicDiv,
  PostBody,
  PostDiv,
  PostTopSection,
  PostUser,
  PostUserName,
  PostUserNameDiv,
  PostUserPic,
  PostUserPicDiv,
  ReactionBar,
  ReactionHorizontalBar,
  ReactionIcon,
  ReactionItem,
  ReactionText,
  StatisticsBar,
  StatisticsSpan,
  TimeStamp,
  TimeStampIcon,
} from "./GroupPostStyles";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import {
  MdOutlineModeComment,
  MdFormatQuote,
  MdIosShare,
  MdVerified,
} from "react-icons/md";

import { IoMdGlobe } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
export const GroupPost = ({
  isLiked = true,
  name = "name here",
  username = "username",
  profile_pic = "https://gab.com/avatars/original/missing.png",
  time = "1 hr .",
  postBody = "",
  likes = 1,
  comments = 2,
  shares = 3,
  isVerified = false,
  id,
  userid,
}) => {
  const { handleLike, isLoggedIn, isLoading } = useContext(AuthContext);
  const history = useHistory();
  return (
    <PostDiv>
      <PostTopSection
        onClick={() => {
          if (isLoggedIn) {
            history.push(`/users/${userid}`);
          } else {
            history.push(`/login`);
          }
        }}
      >
        <PostUserPicDiv>
          <PostUserPic src={profile_pic} alt="user" />
        </PostUserPicDiv>

        <PostUserNameDiv>
          <div>
            <PostUser>
              {name}
              {isVerified && (
                <span
                  style={{
                    marginLeft: "5px",
                    marginTop: "8px",
                    paddingTop: "5px",
                  }}
                >
                  <MdVerified
                    style={{ paddingTop: "5px" }}
                    size="1.2em"
                    color="#3E99ED"
                  />
                </span>
              )}
            </PostUser>
            <PostUserName>@{username}</PostUserName>
          </div>
          <TimeStamp>
            {time}
            <TimeStampIcon>
              <IoMdGlobe size="0.8rem" />
            </TimeStampIcon>
          </TimeStamp>
        </PostUserNameDiv>
      </PostTopSection>

      <PostBody>{postBody}</PostBody>
      <StatisticsBar>
        <StatisticsSpan>
          {likes} likes <StatisticsSpan>{comments} comments </StatisticsSpan>
          <StatisticsSpan>{shares} reposts</StatisticsSpan>
        </StatisticsSpan>
      </StatisticsBar>
      <ReactionHorizontalBar />

      <ReactionBar>
        {isLiked ? (
          <ReactionItem
            onClick={() => {
              if (isLoggedIn) {
                handleLike(id);
              } else {
                history.push("/login");
              }
            }}
          >
            <ReactionIcon>
              <AiFillLike color="#21CF7A" />
            </ReactionIcon>
            <ReactionText color="#21CF7A">Like</ReactionText>
          </ReactionItem>
        ) : (
          <ReactionItem
            onClick={() => {
              if (isLoggedIn) {
                handleLike(id);
              } else {
                history.push("/login");
              }
            }}
          >
            <ReactionIcon>
              <AiOutlineLike />
            </ReactionIcon>
            <ReactionText></ReactionText>
          </ReactionItem>
        )}

        <ReactionItem>
          <ReactionIcon>
            <MdOutlineModeComment />
          </ReactionIcon>
          <ReactionText>Comment</ReactionText>
        </ReactionItem>

        <ReactionItem>
          <ReactionIcon>
            <BsArrowClockwise />
          </ReactionIcon>
          <ReactionText>Repost</ReactionText>
        </ReactionItem>

        <ReactionItem>
          <ReactionIcon>
            <MdFormatQuote />
          </ReactionIcon>
          <ReactionText>Quote</ReactionText>
        </ReactionItem>

        <ReactionItem>
          <ReactionIcon>
            <MdIosShare />
          </ReactionIcon>
          <ReactionText>Share</ReactionText>
        </ReactionItem>
      </ReactionBar>

      <ReactionHorizontalBar />

      <CommentBar>
        <CommentUserPicDiv>
          <CommentUserPic src={profile_pic} />
        </CommentUserPicDiv>
        <CommentInput placeholder="What's on your mind?" />
      </CommentBar>
    </PostDiv>
  );
};


export const NoGroupJoined=()=>{
  const {isLoggedIn} = useContext(AuthContext);
    return (
        <div style={{backgroundColor:"white", width:"100%", borderRadius:"5px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", paddingTop:"15px"}}>
        {isLoggedIn && <NoGroupInstructions/>}
        <FeaturedGroupNames />
        </div>
    )
}

