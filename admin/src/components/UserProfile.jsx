import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { Button } from ".";
import logo from "../data/logo.jpg";
import { auth } from "../firebase";

const UserProfile = () => {
  const history = useHistory();

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      history.push("/");
      window.location.reload(false);
    });
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img className="rounded-full h-24 w-24" src={logo} alt="user-profile" />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> Admin </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            admin@royaltyfinance.com{" "}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <button
          style={{
            color: "white",
            background: "#59bfff",
            width: "100%",
            borderRadius: "25px",
            padding: "0.5rem",
          }}
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
