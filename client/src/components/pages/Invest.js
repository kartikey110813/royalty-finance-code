import React, { useState, useContext } from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Footer from './Footer/Footer';
import LanguageContext from "../../context/LanguageContext";
import LanguageSwitcher from '../LanguageSwitcher';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';
const KEY = "pk_test_51LVHHoEcZkOJK6ETHeqLauXloLY5WpoV43LzKI4AYKbUm36D370uotYfF0IKmfGbP9NAQbaHAna3pqqD878EDd4s00rE0exODC"
const phoneRegex = /^(?!(?:\d{1,2}|100)$)[0-9]\d+$/;

function Investus() {

    const { language } = useContext(LanguageContext);
    const [stripeToken, setStripeToken] = useState(null)
    const [submitState, setSubmitState] = useState()
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:8000/payment", {
                    tokenId: stripeToken.id,
                    amount: amountValue * 100,
                },
                    { headers: { "Content-Type": "application/json", "authorization": "Bearer sk_test_51LHp7VAceEWCQE5EEv9C3ggHFFiKR0M0IPNYPtohT7nTzeKPIBG2PX29fsqSlRIpanXyaqQQln22wx4RCT8eUFer00o4GGzfSI" } }
                )
                .then(async(res) => {
                    const userCollectionRef = collection(db,'Deposits');
                    await addDoc(userCollectionRef,{
                        name:auth.currentUser.email,
                        amount:amountValue,
                        currency:res.data.currency,
                        payment_id:res.data.id,
                        payment_status:res.data.paid,
                        deposit_Method:"card Transfer",
                        verified:false,
                        id:auth.currentUser.uid
                    })
                    console.log(res.data);
                })
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])

    const { login, user } = useUserAuth()
    const [amountValue, setAmountValue] = useState(100)

    const [errorText, setErrorText] = React.useState();
    const [phone, setPhone] = React.useState();
    // useEffect(() => {
    //     if ((yearValue > 1 && yearValue < 10) && (amountValue > 100)) {
    //         console.log(submitState + "submitState false")
    //         setSubmitState(false)
    //     } else {
    //         console.log(submitState + "submitState true")
    //         setSubmitState(true)
    //     }
    // }, [yearValue, amountValue])
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        /*try {
            if (user.emailVerified) {
                await login(data.get('email'), data.get('password'));

                navigate("/redirect")
            }
            else {
                alert("Your email is not verified")
            }
        }
        catch (err) {
            alert(err);
            console.error(err);
        }*/
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
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
                            id="Amount"
                            label={language === 'en' ? "Amount minimum 100€" : "Minimálna Suma 100€"}
                            value={amountValue}
                            onChange={(e) => {
                                setAmountValue(e.target.value)
                            }}
                            helperText={language === 'en' ? "Please enter 100€ minimum" : "Minimálna Suma 100€"}
                            error={amountValue < 100}
                            name="amount"
                            type="number"
                            autoComplete="amount"
                            style={{ background: 'white' }}
                            variant="filled"
                        />

                        <StripeCheckout
                            name="Royalty Finance Group"
                            description={language === 'en' ? `Your investment amount is €${amountValue}` : `Výška vašej investície je €${amountValue}`}
                            amount={amountValue * 100}
                            currency="EUR"
                            token={onToken}
                            stripeKey={KEY}
                            disabled={amountValue < 100  ? true : false}
                        >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#edc967' }}
                                style={{
                                    backgroundColor: "#edc967",
                                }}
                                disabled={amountValue < 100  ? true : false}
                            >
                                {language === 'en' ? "INVEST" : "Investovať"}
                            </Button>
                        </StripeCheckout>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Investus