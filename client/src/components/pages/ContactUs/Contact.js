import React, { useContext, useState, useEffect } from 'react'
import './Contact.css'
import charts from '../../../images/charts.png'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Footer from '../Footer/Footer';
import LanguageContext from "../../../context/LanguageContext";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function Contact() {
    const { language } = useContext(LanguageContext);

    /*const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")*/




    /*const handleSubmit = (event) => {

            axios.post("http://localhost:8000/mail",{
                frommail:email,
                name:name,
                phone:phone,
                message:message
            }).then((response) => {
                if (response.data.msg === 'success'){
                    alert("Email sent, awesome!");

                }else if(response.data.msg === 'fail'){
                    alert("Oops, something went wrong. Try again")
                }
            })*/

        /*event.preventDefault();
        //const data = new FormData(event.currentTarget);
        console.log({
            name: name,
            phonenumber: phone,
            email: email,
            message: message,
        });*/

    return (
        <>
            <div>
            <div style={{height:"75vh",width:"100%",overflow:"hidden", marginTop:"1%"}}>
            <img src={charts} alt={"bg"} style={{width:"100%"}}/>
          </div>
                <Grid container spacing={1} style={{ width: '70%', margin: 'auto' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Item style={{ paddingLeft: '2em' }}>
                            <section class="bgabout">
                                <h2 style={{ color: 'white' }}>{language === "en" ? "Where to find us" : "Kde ná nájdete"}
                                </h2>
                                <hr className='goldline' />
                                <p style={{ color: 'white', paddingLeft: '2em', display: 'flex', alignContent: 'flex-start' }}>
                                    <b>E-MAIL</b>
                                </p>
                                <p style={{ color: 'white', paddingLeft: '2em', display: 'flex', alignContent: 'flex-start' }}>
                                    info@royaltyfinance.cz
                                </p>
                                <p style={{ color: 'white', paddingLeft: '2em', display: 'flex', alignContent: 'flex-start' }}>
                                    <b>{language === "en" ? "PHONE NUMBER:" : "TELEFÓNNE ČÍSLO:"}</b>
                                </p>
                                <p style={{ color: 'white', paddingLeft: '2em', display: 'flex', alignContent: 'flex-start' }}>
                                0951933826
                                </p>
                                <p style={{ color: 'white', paddingLeft: '2em', display: 'flex', alignContent: 'flex-start' }}>
                                    <b>{language === "en" ? "EURO bank account" : "Eurový bankový účet"}</b>
                                </p>
                                <p style={{ color: 'white', paddingLeft: '2em', display: 'flex', alignContent: 'flex-start' }}>
                                    {language === "en" ? "Account number: 2502239248 / 2010\nIBAN: CZ27 2010 0000 0025 0223 9248\nBIC code: FIOBCZPPXXX" : "Číslo účtu: 2502239248 / 2010\nIBAN: CZ27 2010 0000 0025 0223 9248\nBIC code: FIOBCZPPXXX"}
                                </p>
                                <p style={{ color: 'white', paddingLeft: '2em', display: 'flex', alignContent: 'flex-start' }}>
                                    <b>{language === "en" ? "Czech bank account" : "Korunový bankový účet"}</b>
                                </p>
                                <p style={{ color: 'white', paddingLeft: '2em', display: 'flex', alignContent: 'flex-start', alignItems: 'left', justifyContent: 'left' }}>
                                    {language === "en" ? "Account number: 2902239247 / 2010\nIBAN: CZ36 2010 0000 0029 0223 9247\nBIC code: FIOBCZPPXXX" : "Číslo účtu: 2502239248 / 2010\nIBAN: CZ27 2010 0000 0025 0223 9248 \nBIC code: FIOBCZPPXXX"}
                                </p>
                            </section>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ backgroundColor: 'transparent' }}>
                        <Item style={{ paddingRight: '2em' }}>
                            <section class="bgabout">
                                <h2 style={{ color: 'white' }}>{language === "en" ? "Get in touch with us" : "Kontaktujte nás"}                        </h2>
                                <hr className='goldline' />
                            </section>

                            <Box
                                sx={{
                                    marginBottom: 10,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    paddingBottom: 5,
                                    margin: '0rem 1rem',
                                    background: 'transparent'

                                }}
                            >
                                <Box component="form" action='https://formsubmit.co/info@royaltyfinance.cz' method='POST' noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="Namesurname"
                                        label="Name and surname"
                                        name="Name Surname"

                                        style={{ background: 'white' }}
                                        variant="filled"
                                        //onChange={(e) => {
                                            //setName(e.target.value)
                                        //}}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="phonenumber"
                                        label="Phone number"
                                        type="tel"
                                        name="Phone Number"

                                        style={{ background: 'white' }}
                                        variant="filled"
                                        //onChange={(e) => {
                                            //setPhone(e.target.value)
                                       // }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="email"
                                        type="email"
                                        name="Email"
                                        style={{ background: 'white' }}
                                        variant="filled"
                                        //onChange={(e) => {
                                            //setEmail(e.target.value)
                                        //}}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="message"
                                        label="A message"
                                        type="text"
                                        name="Message"
                                        style={{ background: 'white' }}
                                        variant="filled"
                                        //onChange={(e) => {
                                            //setMessage(e.target.value)
                                       // }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, backgroundColor: '#edc967', width: '10em' }}
                                    >
                                        {language === "en" ? "" : ""}Send
                                    </Button>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>

                </Grid>
            </div>
            <Footer />
        </>
    )
}

export default Contact