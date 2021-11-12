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
  width: 48%;
  padding: 10px;
`;
export const Right = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
    width: 0%;
  }
  padding: 10px;
  width: 28%;
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

export const MiddleTopHeading=styled.div`
margin: 0 10px 30px 5px;
font-size: 20px;
font-width:500;
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
  width: 95%;
  background: ${(props) => props.theme.colors.inverted};
  padding: 10px 15px;
  margin: 10px 0 10px 0;
  border-radius: 10px;
`;

export const FeaturedGroups=styled.div `
  width:100%;
  background:#fff;
  border-radius:10px;
  display:flex;
  background: ${(props) => props.theme.colors.inverted};
  flex-direction:row;
  padding:0 0 10px 0;
  justify-content:space-between;
`
export const FeatureHeading=styled.h3  `
    font-weight:600;
    
`
export const ShowAll=styled.button `
  background:none;
  border:none;
  height:25px;
  width:70px;
  border-radius:5px;
  font-size:14px;
  font-weight:600;
  cursor-pointer:pointer;
  color:#58D68D;
  &: hover{
    background:#F2F4F4 ;
  }
`
export const FeatureWrapper=styled.div `
  border-bottom:1px solid #E5E8E8;
  height:70px;
  padding:5px 0;
  
`
export const GroupImage=styled.div `
    width:100px;
    height:50px;
    margin:0px 10px 0px 0;
    border-radius:5px;
    float:left;
    background: url(${(props)=>props.imgUrl}); 
    background-position: center;
    background-size:contain;
    background-origin: content-box;
`
export const GroupName=styled.p`
  font-size:14px;
  font-weight:600;
  padding-top:5px;
  color:#58D68D;
`
export const GroupMembers=styled.p`
  font-size:12px;
  font-weight:500;
  background: ${(props) => props.theme.colors.inverted};
  padding:15px 0;
`
export const ShowAllButton=styled.button `
    width:100%;
    height:35px;
    border:none;
    margin-top:10px;
    border-radius:10px;
`



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
