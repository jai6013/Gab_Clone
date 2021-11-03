import styled from "styled-components";

export const OffsetNav = styled.div`
  height: 80px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Left = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
    width: 0%;
  }
  position: fixed;
  width: 22%;
  padding-left: 5%;
`;

export const Middle = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    margin-left: 0;
  }
  margin-left: 22%;
  width: 44%;
  padding: 10px;
`;
export const Right = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
    width: 0%;
  }
  padding: 10px;
  width: 32%;
`;

export const LeftNavDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftNavItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 3px 0 3px 8px;
  margin: 3px 0 3px 0;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.inverted};
    box-shadow: ${(props) => props.theme.boxshadow};
    border-radius: 5px;
  }
`;

export const LeftPanelHeading = styled.div`
  margin: 10px 10px 30px 5px;
  font-size: larger;
`;

export const IconDiv = styled.div``;
export const IconDivText = styled.div`
  padding-top: 3px;
  margin-left: 5px;
  font-size: small;
`;

export const PostDiv = styled.div`
  background: ${(props) => props.theme.colors.inverted};
  padding: 10px;
  margin: 10px 0 10px 0;
  border-radius: 10px;
`;

export const ReactionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ReactionItem = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ReactionIcon = styled.div``;
export const ReactionText = styled.div`
  font-size: smaller;
`;

export const LeftSmallHeading = styled.div`
  color: ${(props) => props.theme.colors.text2};
  font-size: 12px;
  margin: 5px 0 0 10px;
`;

export const RightSideCard = styled.div`
  width: 80%;
  background: ${(props) => props.theme.colors.inverted};
  padding: 10px;
  margin: 10px 0 10px 0;
  border-radius: 10px;
`;

export const PostPic = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const PostPicDiv = styled.div`
  width: 6%;
  height: 50%;
`;

export const PostPicDivider = styled.div`
  width: 100%;
  height: 1px;
  // margin: 5px 0 5px 0;
  background: ${(props) => props.theme.colors.background1};
`;

export const PostPicTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  //   border: 1px solid #21cf7a;
`;

export const PostInput = styled.input`
  background: ${(props) => props.theme.colors.background2};
  outline: none;
  border: none;
  border-radius: 10px;
  margin: 7px 10px 0 10px;
  padding: 0 0 0 10px;
  width: 92%;
  height: 90%;
  font-size: 14px;
  color: ${(props) => props.theme.colors.input};
`;

export const ProfileCard = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
`;
export const ProfileCardDiv = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  background: ${(props) =>
    props.background
      ? props.theme.colors.background1
      : props.theme.colors.background2};
`;

export const ProfileCardPicDiv = styled.div`
  width: 70px;
  position: relative;
  top: -25px;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const ProfileCardPic = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 7px solid ${(props) => props.theme.colors.background2};
`;

export const ProfileCardName = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`;
export const ProfileCardNameDiv = styled.div`
  font-size: 14px;
  margin: 10px 0 0 15px;
`;

export const ProfileCardUsernameDiv = styled.div`
  font-size: 12px;
  margin: 5px 0 0 15px;
  color: ${(props) => props.theme.colors.text2};
`;

export const ProfileCardStatDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 40px 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfileCardStatName = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text2};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const ProfileCardStat = styled.div`
  font-size: 16px;
  margin: 0 0 5px 0;
  color: ${(props) => props.theme.colors.primary};
`;
