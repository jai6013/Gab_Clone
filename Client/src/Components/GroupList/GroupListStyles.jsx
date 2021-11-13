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
  background: ${(props) => props.theme.colors.background1};
`;

export const PostPicTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
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
  border-radius: 10px;
`;
export const ProfileCardDiv = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  ${(props) =>
    props.background
      ? `background-image:url(${props.background});`
      : `background: ${props.theme.colors.background2};`}
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

export const ShowAllDiv = styled.div`
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

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.background1};
  }
`;

export const GroupImgDiv = styled.div`
  height: 50px;
  width: 80px;
  margin: 0 10px 0 0;
`;

export const GroupDetailsDiv = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

export const GroupImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const GroupTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const GroupFollowersCount = styled.div`
  color: ${(props) => props.theme.colors.text2};
  font-size: 12px;
  margin: 5px 0;
`;

export const AboutDiv = styled.div`
  color: ${(props) => props.theme.colors.text2};
  font-size: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const AboutRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0 5px;
`;

export const AboutItem = styled.div`
  margin: 0 5px 0 5px;
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

export const JoinGrpBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 15px;
  border: ${(props) => props.theme.colors.primary} solid 1px;
  font-size: 12px;
  background: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.isJoined
      ? `background:${props.theme.colors.primary};color: #ffffff;`
      : `background:${props.theme.colors.background2};color: ${props.theme.colors.primary};`}

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    color: #ffffff;
  }
`;
