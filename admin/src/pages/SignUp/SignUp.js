import React from 'react';
import '../../App.css';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
function SignUp() {

    const history = useHistory()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        auth.createUserWithEmailAndPassword(data.get('email'),data.get('password'))
        .then(() => {
            auth.currentUser.sendEmailVerification().then(() => {
                history.push('/signin');
                alert("Email Sent!")
            }).catch((err) => alert("Email not sent"+err));
            
        }).catch((err) => {alert(err)})


    };
    return (
        <div className="App">
            <div>
                <header className="App-header">
                    <div style={{ display: 'flex', color: "#edc967", fontSize: "4rem", paddingTop: '5rem' }}>
                        <p style={{ margin: 'auto' }}>Sign up</p>
                        <hr className='goldline' />
                    </div>
                </header>
            </div>


            <Box
                sx={{
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    paddingBottom: 5,
                    paddingLeft: 4,
                    paddingRight: 4,
                    margin: 'auto',

                }}
            >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="Name"
                        type="name"
                        id="name"
                        autoComplete="current-name"
                        style={{ background: 'white' }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="surname"
                        label="Surname"
                        type="Surname"
                        id="Surname"
                        autoComplete="current-surname"
                        style={{ background: 'white' }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="phonenumber"
                        label="Phone number"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        type="tel"
                        id="phonenumber"
                        autoComplete="current-number"
                        style={{ background: 'white' }}
                    />


                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        style={{ background: 'white' }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        style={{ background: 'white' }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="repassword"
                        label="Re-enter password"
                        type="repassword"
                        id="repassword"
                        style={{ background: 'white' }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#edc967' }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/signin" variant="body2" style={{ color: 'black' }}>
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default SignUp