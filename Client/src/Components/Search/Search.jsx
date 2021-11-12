import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { Middle } from "../Home/HomeStyles";
import {
  Container,
  IconDiv,
  IconDivText,
  Left,
  LeftNavDiv,
  LeftNavItem,
  LeftPanelHeading,
  LeftSmallHeading,
  OffsetNav,
  PostDiv,
  Right,
  RightSideCard,
} from "./SearchStyles";

export const Search = () => {
  return (
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
          <PostDiv></PostDiv>
        </Middle>

        <Right>
          <RightSideCard>Sponsered</RightSideCard>
        </Right>
      </Container>
    </>
  );
};
