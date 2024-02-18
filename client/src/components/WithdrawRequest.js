import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LanguageContext from "../context/LanguageContext";
import LanguageSwitcher from './LanguageSwitcher';
import { useUserAuth } from '../context/UserAuthContext';
import {InputLabel, MenuItem, Select } from '@mui/material';
import { storage, db } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
const WithdrawRequest = () => {

    const { language } = useContext(LanguageContext);
    const [method,setMethod] = useState("");
    const [amount,setAmount] = useState(0);
    const [data,setData] = useState();
    const { user } = useUserAuth()

    const handleChange = (e) => {
            setMethod(e.target.value)

    }
    const handleChangeA = (e) => {
        setAmount(e.target.value)
    }
    const handleSubmit = async (e) => {
e.preventDefault()
            if(amount < 100) {
                console.log("Amount should be more than 100 euros");
            }
            if(method =='') {
                console.log("Please select method of payment")
            }
            const WithdrawRequestRef = doc(db, 'WithdrawRequest', user.uid);
            if( user) {
                await setDoc(WithdrawRequestRef, {
                    id : user.uid,
                    name: data.name,
                    verified : data.isKycComplete,
                    amount : amount,
                    method : method,
                    aproove : false,
                }).then((res) => {
                    console.log("uploaded")
                    alert("Withdraw request send")
                })
                    .catch(err => {
                        console.log(err)
                    });
            }
            else {
                alert("Please try again")
            }
    }
    useEffect( ()=> {
const fetchData = async () => {
    const docRef = await doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        // Convert to City object
        const user = docSnap.data();
        // Use a City instance method
        setData(user)
    } else {
        console.log("No such document!");
      }


}
fetchData()
    },[])
  return (
    <>
         <div style={{ width: "20%", align: "center", margin: "auto" }}>
                <Box
                    sx={{
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingBottom: 5,
                        margin: 'auto',
                        backgroundColor: 'transparent'
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="amount"
                            label={language === "en" ? "Amount" : "Sumo"}
                            type="number"
                            value={amount}
                            id="amount"
                            style={{ background: 'white' }}
                            onChange={handleChangeA}
                            variant="filled"
                        />
                        <br/><br/>
                            <InputLabel id="demo-simple-select-label" style={{color: "#edc967", fontSize: "1.5rem"}}>{language === 'en' ? "Select Payment Method" : "Vyberte spôsob platby"}</InputLabel>
                                <Select
                                style={{color: "#edc967", fontSize: "1rem", backgroundColor: "white"}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={method}
                                    label="Please Choose payment method"
                                    onChange={handleChange}
                                >
                                    <br/>
                                    <MenuItem style={{color: "#edc967", fontSize: "1rem"}} value="Send Money to Bank Account">{language === 'en' ? "Send Money through Bank Account" : "Posielajte peniaze cez bankový účet"}</MenuItem>
                                    <MenuItem style={{color: "#edc967", fontSize: "1rem"}} value="Send money by courier">{language === 'en' ? "Send money by courier" : "Pošlite peniaze kuriérom"}</MenuItem>
                                </Select>
                             <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#edc967' }}
                                style={{
                                    backgroundColor: "#edc967",
                                }}
                            >
                                {language === 'en' ? "Request" : "Žiadosť"}
                            </Button>
                    </Box>
                </Box>
            </div>
    </>
  )
}

export default WithdrawRequest