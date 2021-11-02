import styled from "styled-components";

export const NavDiv = styled.div`
  background: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  min-height: 53px;
  width: 100%;
  position: fixed;
  z-index: 3;
`;
export const NavContainer = styled.div`
  margin: 0 5% 0 5%;
  display: flex;
  flex-direction: row;
`;
export const NavLogoDiv = styled.div`
  width: 70px;
  height: 80%;
  padding: 10px;
`;

export const NavLogo = styled.img`
  width: 70%;
`;

export const SearchBar = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }

  background: ${(props) => props.theme.colors.background1};
  margin: 10px 0 10px 0;
  width: 350px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`;

export const SearchInp = styled.input`
  background: ${(props) => props.theme.colors.background1};
  outline: none;
  border: none;
  margin: 0 10px 0 10px;
  width: 290px;
  color: ${(props) => props.theme.colors.input};
`;

export const SearchIcon = styled.div`
  height: 80%;
  margin-top: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const NavMenuContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }

  margin: 5px 0 0 0;
  display: ${(props) => (props.isLoggedIn ? "flex" : "none")};
  flex-direction: row;
`;

export const NavMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;

  border-bottom: ${(props) =>
    props.isSelected ? "3px solid #21cf7a" : "none"};
  &:hover {
    cursor: pointer;
  }
`;

export const NavMenuItemText = styled.div`
  color: ${(props) =>
    props.theme.colors.background2 === "#FFFFFF" ? "#000000" : "#FFFFFF"};
  font-size: small;
  font-weight: lighter;
`;

export const EmptyDiv = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  width: 300px;
`;

export const VerticalSeparater = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  margin: 12px 10px 12px 10px;
  height: 40%;
  width: 2px;
  background: #999999;
`;

export const NavMenuRoundedItem = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  border-radius: 50%;
  background: ${(props) => props.theme.colors.background1};
  height: 40px;
  width: 40px;
  margin: 0 5px 0 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const NavRoundedDiv = styled.div`
  padding: 7px 0 0 0;
`;

export const NavUserPic = styled.img`
  width: 100%;
  border-radius: 50%;
`;
