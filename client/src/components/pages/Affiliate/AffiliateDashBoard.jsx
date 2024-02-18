import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const AffiliateDashBoard = () => {
  const [uniqueId, setUniqueId] = useState("");
  const [affiliateStatus, setAffiliateStatus] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const userCollectionRef = doc(
        db,
        "Affiliate-users",
        auth.currentUser.uid
      );
      const docSnap = await getDoc(userCollectionRef);
      if (docSnap.exists()) {
        setUniqueId(docSnap.id);
        setAffiliateStatus(docSnap.data().Verified_affiliate);
        console.log("Document data:", docSnap.data().Verified_affiliate);
      } else {
        console.log("No such document!");
      }

      const docRef = collection(db, "users");
      const documents = await getDocs(docRef);
      var a = 0;

      for (let i = 0; i < documents.size; i++) {
        if (
          documents.docs[i].data().referredBy?.trim() == auth.currentUser.uid
        ) {
          a++;
        }
      }

      setCount(a);
    };

    fetchData();
  }, []);

  return (
    <div style={{ color: "white" }}>
      {affiliateStatus === true ? (
        <div>
          <h1> Hey Affiliate! </h1>
          <h1>Your Unique Affiliate Id is : <u>{uniqueId}</u></h1>
          <h1>No. of Users signedUp by your affiliate code :- <u>{count}</u></h1>
          <h1>Affiliate <amount></amount></h1>
        </div>
      ) : (
        <h1>
          Your Approval is awaited. Please Reload to check weather you are
          approved or not.
        </h1>
      )}
    </div>
  );
};

export default AffiliateDashBoard;
