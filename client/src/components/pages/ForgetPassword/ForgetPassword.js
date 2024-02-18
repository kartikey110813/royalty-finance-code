import React, { useCallback, useContext } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../../../App.css';
import particlesOptions from "../../../particles.json";
import './ForgetPassword.css'

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../context/UserAuthContext';
import Footer from '../Footer/Footer';
import LanguageContext from "../../../context/LanguageContext";

const ForgetPassword = () => {
    const { language } = useContext(LanguageContext);

    const navigate = useNavigate()
    const { passwordResetMail } = useUserAuth()
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
            await passwordResetMail(data.get('email'));
            navigate("/signin")
        }
        catch (err) {
            alert(err);
            console.error(err);
        }
        console.log({
            email: data.get('email')
        });
    };
    return (
        <>
            <div className="App">
                <div>
                    <Particles options={particlesOptions} init={particlesInit} />
                    <header className="App-header">
                        <p style={{ color: "#edc967", fontSize: "4rem", margin: '0px', paddingTop: '5rem' }}>
                        {language === "en" ? "Forget Password" : "Zabudnuté heslo"}
                            <hr className='goldline' />
                        </p>
                    </header>
                </div>


                <Box
                    sx={{
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'tranparent',
                        paddingBottom: 5,
                        margin: '0rem 20rem',
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={language === "en" ? "Email Address" : "Emailová adresa"}
                            name="email"
                            autoComplete="email"
                            autoFocus
                            style={{ background: 'white' }}
                            variant="filled"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#edc967' }}
                            style={{
                                backgroundColor: "#edc967",

                            }}
                        >
                           {language === "en" ? "Send email" : "Poslať email"}
                        </Button>
                    </Box>
                </Box>
            </div>
            <Footer />
        </>
    )

}

export default ForgetPassword