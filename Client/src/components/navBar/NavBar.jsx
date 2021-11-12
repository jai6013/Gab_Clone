import { useContext, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { AuthContext } from "../../Contexts/AuthContext";
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
  NavLogin,
  NavSignup,
  UserPop,
} from "./NavbarStyles";
import { useHistory } from "react-router";
import { Popover } from "@mui/material";
import axios from "axios";

export const Navbar = ({ page }) => {
  const { handleTheme, theme } = useContext(ThemeContext);
  const [q, setQ] = useState("");
  const [res, setRes] = useState();
  const { isLoggedIn, handleLogin, handleSignup, user } =
    useContext(AuthContext);
  const history = useHistory();
  // Material UI POPUP
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = async () => {
    await axios.get(`https://secure-ravine-45527.herokuapp.com/users/search?`);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // _______________________________________________________
  return (
    <>
      <NavDiv>
        <NavContainer>
          <NavLogoDiv onClick={() => history.push("/")}>
            <NavLogo
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Gab_text_logo.svg/1200px-Gab_text_logo.svg.png"
            />
          </NavLogoDiv>

          <SearchBar isLoggedIn={isLoggedIn}>
            <SearchInp
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
              }}
              placeholder="Search for people or groups on gab"
            />
            <SearchIcon onClick={handleSearch}>
              <AiOutlineSearch
                size="1.5rem"
                color={theme === "light" ? "#21CF7A" : "#FFFFFF"}
              />
            </SearchIcon>
          </SearchBar>

          {/* Pass Is logged in  falg */}
          {isLoggedIn && <EmptyDiv isLoggedIn={isLoggedIn} />}

          <NavMenuContainer isLoggedIn={isLoggedIn}>
            {/* Pass is Selected flag */}

            <NavMenuItem
              onClick={() => history.push("/")}
              isSelected={"home" === page}
            >
              <div>
                <AiFillHome
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>Home</NavMenuItemText>
            </NavMenuItem>

            <NavMenuItem
              onClick={() => history.push("/explore")}
              isSelected={"explore" === page}
            >
              <div>
                <BsGlobe2
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>Explore</NavMenuItemText>
            </NavMenuItem>
            <NavMenuItem
              onClick={() => history.push("/news")}
              isSelected={"news" === page}
            >
              <div>
                <TiDocumentText
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>News</NavMenuItemText>
            </NavMenuItem>

            <NavMenuItem
              onClick={() => history.push("/groups")}
              isSelected={"groups" === page}
            >
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

            <NavMenuRoundedItem
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <NavUserPic src={user?.profile_pic} alt="user" />
            </NavMenuRoundedItem>
            <UserPop>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <p>hello</p>
              </Popover>
            </UserPop>
          </NavMenuContainer>
          {!isLoggedIn && (
            <>
              <NavLogin
                isLoggedIn={isLoggedIn}
                onClick={history.push("/login")}
              >
                Login
              </NavLogin>
              <NavSignup
                isLoggedIn={isLoggedIn}
                onClick={history.push("/signup")}
              >
                Signup
              </NavSignup>
            </>
          )}
        </NavContainer>
      </NavDiv>
    </>
  );
};
