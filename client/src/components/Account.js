import React from "react";
import "./pages/Dashboard/Dashboard.css";
import { useEffect, useState, useContext } from "react";
import avatar from "../images/avatar.jpg";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import { useUserAuth } from "../context/UserAuthContext";
import { auth, db } from "../firebase";
import Message from "./Message/Message";
const Account = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const [depositData, setDepositData] = useState();
  const [userData, setUserData] = useState();

  const [loading, setLoading] = useState(true);
  const { language } = useContext(LanguageContext);

  const getData = async () => {
    const docRef = await getDocs(collection(db, "Deposits"));
    for (let i = 0; i < docRef.size; i++) {
      console.log(docRef.docs[0].data());
      if (docRef.docs[i].data().id === auth.currentUser.uid) {
        setDepositData(docRef.docs[i].data());
      }
    }

    const userRef = await getDoc(doc(db, "users", user.uid));
    setUserData(userRef.data());
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [depositData, userData]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="App">
    <div className="container">
      <div className="inner-container-1">
        <img
          style={{ width: "160px", heigth: "160px", borderRadius: "80px" }}
          src={avatar}
          alt={" Joe don"}
        />

        <h2>
          <b>
            {userData ? userData.name : ""} - {userData ? userData.surname : ""}
          </b>
        </h2>
        <h2>Account ID :{userData ? auth.currentUser.uid : ""} </h2>
        <h2>
          Deposit verified :
          {depositData
            ? depositData.verified?.toString()
            : " No deposits made. "}
        </h2>
        <h2>Invested : {}</h2>
      </div>
      <div className="inner-container-2">
        <Message />
      </div>
    </div>
    </div>
  );
};

export default Account;
