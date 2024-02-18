import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LanguageContext from "../context/LanguageContext";
import { auth, db } from "../firebase";
import { addDoc, collection} from "firebase/firestore";

const TransferWithCourior = () => {
  const { language } = useContext(LanguageContext);

  const [amount, setAmount] = useState("");
  const [dob, setDob] = useState("");
  const [contactNumber, setContactNumber] = useState("");


  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const userCollectionRef = collection(db,'Deposits');
    await addDoc(userCollectionRef,{
        amount:amount,
        dob:dob,
        contactNumber:contactNumber,
        deposit_Method:"Courier Transfer",
        verified:false,
        name:auth.currentUser.email,
        id:auth.currentUser.uid
    }).then(() => {
        alert("Thanks! We've added your details.")
    }).catch((err) => {
        alert(err)
    })
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1, width: "40%" }}
        margin="auto"
        onSubmit={handleSubmit}
      >
        <TextField
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
          margin="normal"
          required
          fullWidth
          name="amount"
          label={language === "en" ? "Amount" : "Suma"}
          type="number"
          id="password"
          autoComplete="current-password"
          style={{ background: "white" }}
          variant="filled"
        />

        <TextField
        value={dob}
        onChange={(e) => setDob(e.target.value)}
          margin="normal"
          required
          fullWidth
          name="date"
          type="date"
          id="date"
          autoComplete="date"
          style={{ background: "white" }}
          variant="filled"
        />
        <TextField
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
          margin="normal"
          required
          fullWidth
          id="contactNumber"
          label={
            language === "en"
              ? "Enter your contact number"
              : "Zadajte svoje kontaktné číslo"
          }
          name="contactNumber"
          autoComplete="COntact Number"
          autoFocus
          style={{ background: "white" }}
          variant="filled"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, width: "10em", backgroundColor: "#edc967" }}
          style={{
            backgroundColor: "#edc967",
          }}
        >
          {language === "en" ? "Confirm" : "Potvrďte"}
        </Button>
      </Box>
    </>
  );
};

export default TransferWithCourior;
