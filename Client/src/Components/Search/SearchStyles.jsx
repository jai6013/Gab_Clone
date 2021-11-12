import styled, { keyframes } from "styled-components";

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

  ${(props) =>
    props.isSelected &&
    `background:${props.theme.colors.inverted};
     box-shadow:${props.theme.boxshadow};
     border-radius:5px;
  `}
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
  padding: 10px 0;
  margin: 10px 0 10px 0;
  border-radius: 10px;
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

export const SearchTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SeeMoreDiv = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.primary};
  padding: 5px;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.background1};
  }
`;

export const SearchCards = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.button};
  border-bottom: 1px solid ${(props) => props.theme.colors.button};
  padding: 5px 10px;
  width: 100%;

  ${(props) =>
    props.head
      ? ``
      : `&:hover{
    cursor:pointer;
    background: ${props.theme.colors.background1};
  }`}
`;

export const SearchCountDiv = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text2};
  margin: 0 5px;
`;

export const ProfileTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: spave-between;
  height: 40px;
`;

export const ProfilePicDiv = styled.div`
  width: 40px;
`;

export const ProfilePic = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const ProfileTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
  width: 80%;
`;
export const NameDiv = styled.div`
  font-size: 14px;
`;
export const UsernameDiv = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text2};
  margin: 5px 0 0 0;
`;

export const BioDiv = styled.div`
  margin: 0 0 0 60px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.text2};
`;

export const FollowBtn = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 15px;
  padding: 5px;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) =>
    props.type === "Follow" ? props.theme.colors.primary : "#FFFFFF"};

  background: ${(props) =>
    props.type === "Following"
      ? props.theme.colors.primary
      : props.theme.colors.background2};

  &:hover {
    cursor: pointer;
    ${(props) =>
      props.type === "Following"
        ? `opacity:50%;`
        : `background:${props.theme.colors.primary}; color:#FFFFFF;`}
  }
`;

export const GroupTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: spave-between;
  height: 50px;
`;

export const GroupPicDiv = styled.div`
  width: 70px;
  height: 50px;
`;

export const GroupPic = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
export const GroupTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
  width: 80%;
`;
export const GroupNameDiv = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;
export const GroupCountDiv = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text2};
  margin: 5px 0 0 0;
`;

export const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  height: 30px;
  width: 30px;
  margin: 0 45% 0 45%;
`;
export const LoadingImg = styled.img`
  height: 100%;
  width: 100%;
`;
