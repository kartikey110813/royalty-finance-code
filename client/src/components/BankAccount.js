import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LanguageContext from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { MenuItem, Select } from "@mui/material";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const BankAccount = () => {
  const { language } = useContext(LanguageContext);
  const [method, setMethod] = useState("Select Payment Method");
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const userCollectionRef = collection(db,'Deposits');
    await addDoc(userCollectionRef,{
        name:name,
        amount:amount,
        accountNumber:accountNumber,
        deposit_Method:"Bank Transfer",
        verified:false,
        id:auth.currentUser.uid
    }).then(() => {
        alert("Thanks! We've added your details.")
    }).catch((err) => {
        alert(err)
    })
  };

  return (
    <div>
      <h2>
        Please send the money to the following bank account and submit the form
        for confimation
      </h2>
      <br />
      <br />
      <br />
      <h2>Slovak bank account</h2>
      <h2>Account number: 2502239248 / 2010</h2>
      <h2>IBAN: CZ27 2010 0000 0025 0223 9248 BIC code: FIOBCZPPXXX</h2>
      <br />
      <br />
      <h2>Czech bank account</h2>
      <h2>Account number: 2902239247 / 2010</h2>
      <h2>IBAN: CZ36 2010 0000 0029 0223 9247\nBIC code: FIOBCZPPXXX</h2>
      <h2>IBAN: CZ27 2010 0000 0025 0223 9248 \nBIC code: FIOBCZPPXXX</h2>
      <br />
      <br />
      <Box
        component="form"
        noValidate
        sx={{ mt: 1, width: "40%" }}
        margin="auto"
        onSubmit={handleSubmit}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
          fullWidth
          id="name"
          label={language === "en" ? "Enter you name" : "Zadajte svoje meno"}
          name="name"
          autoComplete="name"
          autoFocus
          style={{ background: "white" }}
          variant="filled"
        />
        <TextField
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          margin="normal"
          required
          fullWidth
          name="accountNumber"
          label={
            language === "en" ? "Enter account number" : "Zadajte číslo účtu"
          }
          type="text"
          id="accountNumber"
          autoComplete="current-account"
          style={{ background: "white" }}
          variant="filled"
        />
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
      <br />
      <br />
    </div>
  );
};

export default BankAccount;
