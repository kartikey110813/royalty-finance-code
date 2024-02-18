import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import logo from '../images/logo.jpg'
import { useUserAuth } from '../context/UserAuthContext';
import LanguageContext from '../context/LanguageContext';
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
    const { language } = useContext(LanguageContext);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMolibeMenu = () => setClick(false);
    const { user, logOut } = useUserAuth();

    const handleLogout = async () => {
        try {
            await logOut()
      window.location.reload(false);

        }

        catch (err) {
            console.log(err)

        }
    }

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar" style={{ zIndex: "10000000" }}>
                    <div className="navbar-container container">
                        <NavLink to="/" className="navbar-logo" onClick={closeMolibeMenu} >
                            <img src={logo} alt={"logo"} width={"60px"} />
                        </NavLink>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li style={{
                                marginBottom: '2em', marginTop: '2em'
                            }}
                                // alignSelf: 'end',
                                // marginRight: '2em'
                                className={'langswitch'}>
                                <LanguageSwitcher />
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) =>
                                    isActive ? 'nav-links active-navlink' : 'nav-links'
                                } onClick={closeMolibeMenu}>
                                    {language === "en" ? "Home" : "Úvod"}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/aboutus"
                                    className={({ isActive }) =>
                                        isActive ? 'nav-links active-navlink' : 'nav-links'
                                    }
                                    onClick={closeMolibeMenu}
                                >
                                    {language === "en" ? "About Us" : "O Nás"}
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/invest"
                                    className={({ isActive }) =>
                                        isActive ? 'nav-links active-navlink' : 'nav-links'
                                    }
                                    onClick={closeMolibeMenu}
                                >

                                    {language === "en" ? "Invest" : "Investovať"}
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/cooperation"
                                    className={({ isActive }) =>
                                        isActive ? 'nav-links active-navlink' : 'nav-links'
                                    }
                                    onClick={closeMolibeMenu}
                                >

                                    {language === "en" ? "Cooperation" : "Spolupráca"}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? 'nav-links active-navlink' : 'nav-links'
                                    }
                                    onClick={closeMolibeMenu}
                                >

                                    {language === "en" ? "Contact" : "Kontakt"}
                                </NavLink>
                            </li>
                            {
                                !user ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? 'nav-links active-navlink' : 'nav-links'
                                                }
                                                to="/signin"
                                                onClick={closeMolibeMenu}
                                            >

                                                {language === "en" ? "Sign in" : "Prihlásenie"}
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? 'nav-links active-navlink' : 'nav-links'
                                                }
                                                to="/signup"
                                                onClick={closeMolibeMenu}
                                            >

                                                {language === "en" ? "Sign up" : "Registrácia"}
                                            </NavLink>
                                        </li>
                                        <li className={'langswitchmain'}>
                                            <LanguageSwitcher />
                                        </li>
                                    </>) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? 'nav-links active-navlink' : 'nav-links'
                                                }
                                                to="/dashboard"
                                                onClick={closeMolibeMenu}
                                            >

                                                {language === "en" ? "Dashboard" : "Profil"}
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? 'nav-links active-navlink' : 'nav-links'
                                                }
                                                to="/"
                                                onClick={(event) => [closeMolibeMenu(), handleLogout()]}
                                            >

                                                {language === "en" ? "Logout" : "Ohlásiť Sa"}
                                            </NavLink>
                                        </li>
                                        <li className={'langswitchmain'}>
                                            <LanguageSwitcher />
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;