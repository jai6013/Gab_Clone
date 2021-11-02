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

  width: 22%;
  padding-left: 5%;
`;

export const Middle = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }
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
  border: solid 2px #000000;
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
  margin: 10px 10px 10px 5px;
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
