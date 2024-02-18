import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import "./Message.css";
const Message = () => {
  const [userMessage, setUserMessage] = useState("");
  const [adminMessage, setAdminMessage] = useState("");

  const sendData = async () => {
    const messageRef = await doc(db, "messages", auth.currentUser.uid);
    const mess = setDoc(messageRef, {
      message: userMessage,
      userName:auth.currentUser.email
    }).then(() => {
      alert(userMessage);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const getMessRef = await getDoc(doc(db, "messages", auth.currentUser.uid,"admin-reply","message"));
      setAdminMessage(getMessRef.data().reply);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container-message">
        <div className="container-input">
          <input
            className="message_input"
            value={userMessage}
            onChange={(e) => {
              setUserMessage(e.target.value);
            }}
          />
        </div>
        <div className="conatainer-button">
          <button className="message_btn" onClick={sendData}>
            Send
          </button>
        </div>
        <h1>
          admin's response :{" "}
          {adminMessage ? adminMessage : "No message from Admin"}{" "}
        </h1>
      </div>
    </>
  );
};

export default Message;
