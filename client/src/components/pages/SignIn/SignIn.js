import React, { useCallback, useContext } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../../../App.css';
import particlesOptions from "../../../particles.json";
import './Signin.css'

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useUserAuth } from '../../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore'
import Footer from '../Footer/Footer';
import LanguageContext from "../../../context/LanguageContext";

function SignIn() {
    const { language } = useContext(LanguageContext);

    const { login, user } = useUserAuth()
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {

            await login(data.get('email'), data.get('password'));
            navigate('/user/dashboard')
        }
        catch (err) {
            alert(err);
            console.error(err);
        }
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <>
            <div className="App" style={{ height: "80vh", display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <div>
                    <Particles options={particlesOptions} init={particlesInit} />
                    <header className="App-header">
                        <p style={{ color: "#edc967", fontSize: "4rem", margin: '0px', background: 'transparent' }}>
                            {language === "en" ? "Sign in" : "Prihlásenie"}
                            <hr className='goldline' />
                        </p>
                    </header>
                </div>


                <Box
                    sx={{
                        marginTop: -10,
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'transparent'
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={language === "en" ? "Email Address" : "Email"}
                            name="email"
                            autoComplete="email"
                            autoFocus
                            style={{ background: 'white' }}
                            variant="filled"

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={language === "en" ? "Password" : "Heslo"}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            style={{ background: 'white' }}
                            variant="filled"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: '10em', backgroundColor: '#edc967' }}
                            style={{
                                backgroundColor: "#edc967",
                            }}
                        >
                            {language === "en" ? "Sign In" : "Prihlásiť"}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgetpassword" variant="body2" style={{ color: 'white' }}>
                                    {language === "en" ? "Forgot password?" : "Zabudli ste heslo?"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2" style={{ color: 'white' }}>
                                    {language === "en" ? "Don't have an account? Sign Up" : "Nemáte účet? Zaregistrujte sa"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
            <Footer />
        </>
    )
}

export default SignIn