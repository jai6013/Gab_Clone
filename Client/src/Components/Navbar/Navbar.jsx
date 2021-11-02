import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { MdNotifications, MdGroups, MdLightbulb } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { IoChatbubblesSharp } from "react-icons/io5";
import {
  NavContainer,
  NavDiv,
  SearchInp,
  NavLogo,
  NavLogoDiv,
  SearchBar,
  SearchIcon,
  NavMenuContainer,
  NavMenuItem,
  NavMenuItemText,
  EmptyDiv,
  VerticalSeparater,
  NavMenuRoundedItem,
  NavRoundedDiv,
  NavUserPic,
} from "./NavbarStyles";

export const Navbar = () => {
  const { handleTheme, theme } = useContext(ThemeContext);
  return (
    <>
      <NavDiv>
        <NavContainer>
          <NavLogoDiv>
            <NavLogo
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Gab_text_logo.svg/1200px-Gab_text_logo.svg.png"
            />
          </NavLogoDiv>

          <SearchBar>
            <SearchInp placeholder="Search for people or groups on gab" />
            <SearchIcon>
              <AiOutlineSearch
                size="1.5rem"
                color={theme === "light" ? "#21CF7A" : "#FFFFFF"}
              />
            </SearchIcon>
          </SearchBar>
          <EmptyDiv />

          {/* Pass Is logged in  falg */}

          <NavMenuContainer isLoggedIn={true}>
            {/* Pass is Selected flag */}

            <NavMenuItem isSelected={true}>
              <div>
                <AiFillHome
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>Home</NavMenuItemText>
            </NavMenuItem>

            <NavMenuItem>
              <div>
                <BsGlobe2
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>Explore</NavMenuItemText>
            </NavMenuItem>
            <NavMenuItem>
              <div>
                <TiDocumentText
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>News</NavMenuItemText>
            </NavMenuItem>

            <NavMenuItem>
              <div>
                <MdGroups
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>Groups</NavMenuItemText>
            </NavMenuItem>

            <NavMenuItemText>
              <VerticalSeparater />
            </NavMenuItemText>

            <NavMenuRoundedItem>
              <NavRoundedDiv>
                <MdNotifications size="1.5rem" color="#999999" />
              </NavRoundedDiv>
            </NavMenuRoundedItem>

            <NavMenuRoundedItem>
              <NavRoundedDiv>
                <IoChatbubblesSharp size="1.5rem" color="#999999" />
              </NavRoundedDiv>
            </NavMenuRoundedItem>

            <NavMenuRoundedItem onClick={handleTheme}>
              <NavRoundedDiv>
                <MdLightbulb size="1.5rem" color="#999999" />
              </NavRoundedDiv>
            </NavMenuRoundedItem>

            <NavMenuItemText>
              <VerticalSeparater />
            </NavMenuItemText>

            <NavMenuRoundedItem>
              <NavUserPic
                src="https://gab.com/avatars/original/missing.png"
                alt="user"
              />
            </NavMenuRoundedItem>
          </NavMenuContainer>
        </NavContainer>
      </NavDiv>
    </>
  );
};
