import styled from "styled-components";

export const PostDiv = styled.div`
  background: ${(props) => props.theme.colors.inverted};
  padding: 10px;
  margin: 10px 0 10px 0;
  border-radius: 10px;
`;

export const ReactionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ReactionItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  width: 90px;
  border-radius: 9px;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.background1};
  }
`;
export const ReactionIcon = styled.div``;

export const ReactionText = styled.div`
  margin: 2px 0 0 5px;
  font-size: 12px;
  ${(props) => props.color && "color: #21CF7A"};
`;

export const ReactionHorizontalBar = styled.div`
  width: 100%;
  height: 1px;
  margin: 5px 0 5px 0;
  background: ${(props) => props.theme.colors.background1};
`;

export const PostTopSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  //   border: 1px solid #21cf7a;
`;

export const PostUserPicDiv = styled.div`
  width: 50px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;
export const PostUserPic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const PostUserNameDiv = styled.div`
  margin: 10px 0 10px 5px;
  display: flex;
  flex-direction: column;
`;

export const PostUser = styled.span`
  margin: 0 5px 0 5px;
  font-weight: bold;
  font-size: medium;
  &:hover {
    cursor: pointer;
  }
`;
export const PostUserName = styled.span`
  margin: 0 0 0 5px;
  color: ${(props) => props.theme.colors.text2};
  font-size: smaller;
  &:hover {
    cursor: pointer;
  }
`;

export const TimeStamp = styled.div`
  color: ${(props) => props.theme.colors.text2};
  font-size: 12px;
  padding: 5px;
  margin: 0 5px 0 0;
  display: flex;
  flex-direction: row;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const TimeStampIcon = styled.div`
  margin: 0 0 5px 5px;
`;

export const PostBody = styled.div`
  padding: 5px;
  font-weight: light;
  font-size: 14px;
`;

export const CommentBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  // border: 1px solid #21cf7a;
`;

export const CommentUserPicDiv = styled.div`
  margin: 10px 5px 0 5px;
  width: 35px;
  height: 30px;
`;

export const CommentUserPic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const CommentInput = styled.input`
  background: ${(props) => props.theme.colors.background1};
  outline: none;
  border: none;
  border-radius: 10px;
  margin: 7px 10px 0 10px;
  padding: 0 0 0 10px;
  width: 92%;
  height: 70%;
  font-size: 12px;
  color: ${(props) => props.theme.colors.input};
`;

export const StatisticsBar = styled.div`
  color: ${(props) => props.theme.colors.text2};
  font-size: 12px;
  margin: 10px 0 0 10px;
`;

export const StatisticsSpan = styled.span`
  margin: 0 5px 0 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const CommentPostBtn = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  outline: none;
  color: #ffffff;
  padding: 5px 15px 5px 15px;
  font-size: 12px;
  height: 30px;
  margin: 10px 0 0 0;
  border-radius: 10px;
  position: relative;
  left: -70px;
  z-index: 1;
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
  // display: none;
  &:focus {
    ${CommentInput} {
      display: visible;
    }
  }
`;
