import "./BottomNav.scss";

import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { AuthContext } from "../../Contexts/AuthContext";
import { useHistory } from "react-router";

import { HomeIcon } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupsIcon from "@mui/icons-material/Groups";
import LanguageIcon from "@mui/icons-material/Language";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

import { MdNotifications, MdGroups, MdLightbulb } from "react-icons/md";

function BottomNav({ page }) {
  const { handleTheme, theme } = useContext(ThemeContext);
  const { isLoggedIn, handleLogin, handleSignup, user } =
    useContext(AuthContext);
  const history = useHistory();

  return (
    <div className="_bottomNav">
      <div>
        {/* <HomeIcon
          fontSize="large"
          color="disabled"
          onClick={() => history.push("/")}
          isSelected={"home" === page}
        /> */}
        <MdGroups size="3rem" color="" />
      </div>
      <div>
        <NotificationsIcon fontSize="large" color="disabled" />
      </div>
      <div>
        <GroupsIcon
          fontSize="large"
          onClick={() => history.push("/groups")}
          isSelected={"groups" === page}
        />
      </div>
      <div>
        <LanguageIcon
          fontSize="large"
          color="disabled"
          onClick={() => history.push("/explore")}
          isSelected={"explore" === page}
        />
      </div>
      <div>
        <LibraryBooksIcon
          fontSize="large"
          color="disabled"
          onClick={() => history.push("/news")}
          isSelected={"news" === page}
        />
      </div>
      <div>
        <AccountCircleIcon fontSize="large" color="disabled" />
      </div>
    </div>
  );
}

export default BottomNav;
