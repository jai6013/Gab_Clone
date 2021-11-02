import React from "react";
import { AiFillHome, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import {
  MdNotifications,
  MdOutlineModeComment,
  MdFormatQuote,
  MdIosShare,
} from "react-icons/md";
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
  Middle,
  OffsetNav,
  PostDiv,
  ReactionBar,
  ReactionIcon,
  ReactionItem,
  ReactionText,
  Right,
} from "./HomeStyles";

export const Home = () => {
  return (
    <div>
      <OffsetNav />
      <Container>
        <Left>
          <LeftPanelHeading>Home</LeftPanelHeading>
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
            <ReactionBar>
              <ReactionItem>
                <ReactionIcon>
                  <AiOutlineLike />
                </ReactionIcon>
                <ReactionText>Like</ReactionText>
              </ReactionItem>

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
            <br />
            <hr />
          </PostDiv>
          <PostDiv>a</PostDiv>
        </Middle>

        <Right>Right section</Right>
      </Container>
    </div>
  );
};
