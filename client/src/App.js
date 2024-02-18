import React, { useState, useContext, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/AboutUs/About";
import Contact from "./components/pages/ContactUs/Contact";
import Cooperation from "./components/pages/Cooperation/Cooperation";
import Invest from "./components/pages/Invest/Invest";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import { UserAuthContextProvidor } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgetPassword from "./components/pages/ForgetPassword/ForgetPassword";
import Pic from "./components/Pic";
import LanguageContext from "./context/LanguageContext";
import Signin from "./components/pages/Affiliate/Signin";
import AffiliateDashBoard from "./components/pages/Affiliate/AffiliateDashBoard";
import ProtectedRouteAffiliate from "./components/ProtectedRouteAffiliate";

import { auth } from "./firebase";
import { useStateContext } from "./context/ContextProvider";
import Sidebar from "./components/Sidebar";

import Affiliate from "./components/pages/Affiliate/Affiliate";
import NavbarAfterLogin from "./components/NavbarAfterLogin";
import Kyc from "./components/Kyc";
import DepositWithdraw from "./components/pages/DepositWithdraw/Deposit";
import Graph from "./components/Graph";
import WithdrawRequest from "./components/WithdrawRequest";
import Account from "./components/Account";
function App() {
  const { activeMenu, currentColor, themeSettings, setThemeSettings } =
    useStateContext();
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Router>
          <div className="dark">
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              ></div>

              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                  {isLoggedIn && <Sidebar />}
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  {isLoggedIn && <Sidebar />}
                </div>
              )}
              <div
                className={
                  activeMenu
                    ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                    : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                }
              >
                <div>
                  <LanguageContext.Provider value={value}>
                    <UserAuthContextProvidor>
                      <NavbarAfterLogin />
                      <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route
                          path="/user/dashboard"
                          exact
                          element={
                            <ProtectedRoute>
                              <Dashboard />
                            </ProtectedRoute>
                          }
                        />
                        <Route path="/user/documents" exact element={<Kyc />} />
                        <Route
                          path="/user/deposit"
                          exact
                          element={<DepositWithdraw />}
                        />{" "}
                        <Route
                          path="/user/account"
                          exact
                          element={<Account/>}
                        />
                        <Route
                          path="/user/withdraw"
                          exact
                          element={<WithdrawRequest />}
                        />
                        <Route
                          path="/affiliate/dashboard"
                          element={
                            <ProtectedRouteAffiliate>
                              <AffiliateDashBoard />
                            </ProtectedRouteAffiliate>
                          }
                        />
                        <Route
                          path="/user/affiliate"
                          exact
                          element={<Signin />}
                        />
                      </Routes>
                    </UserAuthContextProvidor>
                  </LanguageContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </Router>
      ) : (
        <Router>
          <LanguageContext.Provider value={value}>
            <UserAuthContextProvidor>
              <Navbar />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/graph" exact element={<Graph />} />
                <Route path="/aboutus" exact element={<About />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/cooperation" exact element={<Cooperation />} />
                <Route
                  path="/forgetpassword"
                  exact
                  element={<ForgetPassword />}
                />
                <Route path="/invest" exact element={<Invest />} />
                <Route path="/signin" exact element={<SignIn />} />
                <Route path="/signup" exact element={<SignUp />} />
                <Route path="/pic" exact element={<Pic />} />
                <Route path="/affiliate/join" exact element={<Affiliate />} />
              </Routes>
            </UserAuthContextProvidor>
          </LanguageContext.Provider>
        </Router>
      )}
    </>
  );
}
export default App;
