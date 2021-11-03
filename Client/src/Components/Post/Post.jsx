import React from "react";
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
} from "./PostStyles";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import {
  MdOutlineModeComment,
  MdFormatQuote,
  MdIosShare,
} from "react-icons/md";

import { IoMdGlobe } from "react-icons/io";

export const Post = ({
  isLiked = true,
  name = "name here",
  username = "username",
  profile_pic = "https://gab.com/avatars/original/missing.png",
  time = "1 hr .",
  postBody = "",
  likes = 1,
  comments = 2,
  shares = 3,
}) => {
  return (
    <PostDiv>
      <PostTopSection>
        <PostUserPicDiv>
          <PostUserPic src={profile_pic} alt="user" />
        </PostUserPicDiv>

        <PostUserNameDiv>
          <div>
            <PostUser>{name}</PostUser>
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
          <ReactionItem>
            <ReactionIcon>
              <AiFillLike color="#21CF7A" />
            </ReactionIcon>
            <ReactionText color="#21CF7A">Like</ReactionText>
          </ReactionItem>
        ) : (
          <ReactionItem>
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
