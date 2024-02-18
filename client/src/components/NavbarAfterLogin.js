import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import logo from "../images/logo.jpg";
import { useUserAuth } from "../context/UserAuthContext";
import LanguageContext from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function NavbarAfterLogin() {
  const { language } = useContext(LanguageContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMolibeMenu = () => setClick(false);
  const { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
        await logOut();
        window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar" style={{ zIndex: "10000000" }}>
          <div className="navbar-container container">
            <NavLink to="/" className="navbar-logo" onClick={closeMolibeMenu}>
              <img src={logo} alt={"logo"} width={"60px"} />
            </NavLink>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li
                style={{
                  marginBottom: "2em",
                  marginTop: "2em",
                }}
                className={"langswitch"}
              >
                <LanguageSwitcher />
              </li>
             
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-links active-navlink" : "nav-links"
                      }
                      to="/user/dashboard"
                      onClick={closeMolibeMenu}
                    >
                      {language === "en" ? "Dashboard" : "Profil"}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-links active-navlink" : "nav-links"
                      }
                      to="/"
                      onClick={(event) => [closeMolibeMenu(), handleLogout()]}
                    >
                      {language === "en" ? "Logout" : "Ohlásiť Sa"}
                    </NavLink>
                  </li>
                  <li className={"langswitchmain"}>
                    <LanguageSwitcher />
                  </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
    );
}

export default NavbarAfterLogin;
