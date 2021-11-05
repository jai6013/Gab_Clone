import styled from "styled-components";

export const HeadSection = styled.div`
  background: ${(props) => props.theme.colors.background2};
`;

export const CoverContainer = styled.div`
  margin: 0 5% 0 5%;
  padding-top: 50px;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 250px;
    margin: 0;
    padding-top: 50px;
  }
  height: 400px;
`;
export const CoverPic = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileNavDiv = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    height: 100px;
  }
  margin: 0 5% 0 5%;
  height: 150px;
  display: flex;
  flex-direction: row;
`;

export const ProfilePicDiv = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    height: 100px;
    width: 100px;
  }
  height: 150px;
  width: 150px;
  border-radius: 50%;
  position: relative;
  top: -40px;
  margin: 0 0 0 5%;
`;
export const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 7px solid ${(props) => props.theme.colors.background2};
`;

export const ProfileName = styled.div`
  padding: 5px 0 0 5px;
  font-size: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
  }
`;

export const ProfileHandle = styled.div`
  padding: 5px 0 0 5px;
  font-size: 14px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
  }
  color: ${(props) => props.theme.colors.text2};
`;

export const ProfileNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ProfileNavLeft = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 40%;
  margin-left: 5%;
`;

export const ProfileNavLeftItem = styled.div`
  justify-content: start;
  padding: 10px 10px 10px 10px;
  margin-top: 20px;
  font-size: 12px;
  ${(props) =>
    props.selected && `border-bottom: solid 3px ${props.theme.colors.primary}`};
  ${(props) => props.selected && `color: ${props.theme.colors.primary}`};
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.background1};
    border-radius: 5px;
  }
`;

export const ProfileNavRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 40%;
  margin-right: 5%;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    justify-content: start;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-left: 5%;
  }
`;

export const OutlineBtn = styled.button`
  width: 150px;
  height: 50px;
  margin: 0 10% 10px 0;
  border-radius: 25px;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  border: ${(props) => props.theme.colors.primary} solid 1px;
  background: ${(props) => props.theme.colors.background2};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    color: #ffffff;
  }
`;

export const ProfileBody = styled.div`
  margin: 0 10% 0 10%;
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1%;
    margin: 0 2% 0 2%;
    width: 96%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1%;
    margin: 0 2% 0 2%;
    width: 96%;
  }
`;

export const ProfileBodyLeftDiv = styled.div`
  padding: 20px;
  width: 35%;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const ProfileBodyRightDiv = styled.div`
  padding: 20px;
  width: 65%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 1%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 1%;
  }
`;
