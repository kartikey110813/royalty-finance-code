import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Dashboard, Orders, Customers } from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { AuthProvider } from "./AuthProvider";
import ProtectedRoutes from "./ProtectedRoutes";
import { auth } from "./firebase";
import ClientDatabase from "./pages/ClientDatabase";
import AffiliateDatabase from "./pages/AffiliateDatabase";
import KYCDatabase from "./pages/KYCDatabase";
import Deposits from "./pages/Deposits";
import Withdrawls from "./pages/Withdrawls";
import Bonus from "./pages/Bonus";
import ChangeOfData from "./pages/ChangeOfData";
import Messages from "./pages/Messages";
import AffiliateRequests from "./pages/AffiliateRequests";
import CooperationRequests from "./pages/CooperationRequests";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: "50%" }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>

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
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
                </div>
                <div>
                  <Switch>
                    {themeSettings && <ThemeSettings />}

                    {/* dashboard  */}
                    <AuthProvider>
                      <ProtectedRoutes path="/dashboard" exact>
                        <Dashboard />
                      </ProtectedRoutes>
                      {/* pages  */}
                      <ProtectedRoutes path="/transactions" exact>
                        <Orders />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/customers" exact>
                        <Customers />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/clientDatabase" exact>
                        <ClientDatabase />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/AffiliateDatabase" exact>
                        <AffiliateDatabase />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/KYCDatabase" exact>
                        <KYCDatabase />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/Deposits" exact>
                        <Deposits />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/Withdrawls">
                        <Withdrawls />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/Bonus" exact>
                        <Bonus />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/ChangeOfData" exact>
                        <ChangeOfData />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/AffiliateRequests" exact>
                        <AffiliateRequests />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/CooperationRequests" exact>
                        <CooperationRequests />
                      </ProtectedRoutes>
                      <ProtectedRoutes path="/Messages" exact>
                        <Messages />
                      </ProtectedRoutes>
                    </AuthProvider>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            <AuthProvider>
              <Route path="/" exact component={SignIn} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
            </AuthProvider>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
