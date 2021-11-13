import "./PopUp.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { AuthContext } from "../Contexts/AuthContext";
import { useHistory } from "react-router";
function PopUp({ page }) {
  const { handleTheme, theme } = useContext(ThemeContext);
  const { isLoggedIn, user } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div className="popUp">
      <div
        className="papiGudiya"
        onClick={() => history.push("/me")}
        isSelected={"profile" === page}
      >
        <p>Profile</p>
        <MdOutlineKeyboardArrowRight size="2rem" />
      </div>
      <div
        className="papiGudiya"
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/login")
          window.location.reload()
        }}
      >
        <p>LogOut</p>
        <MdOutlineKeyboardArrowRight size="2rem" />
      </div>
    </div>
  );
}

export default PopUp;
