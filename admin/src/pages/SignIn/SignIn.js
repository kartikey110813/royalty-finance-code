import React from "react";
import "../../App.css";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function SignIn() {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    auth
      .signInWithEmailAndPassword(data.get("email"), data.get("password"))
      .then(({ user }) => {
        console.log(user);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <div
            style={{
              display: "flex",
              color: "#edc967",
              fontSize: "15px",
              margin: "0px",
              paddingTop: "15px",
            }}
          >
            <p style={{ margin: "auto" }}>Sign In</p>
            <hr className="goldline" />
          </div>
        </header>
      </div>

      <Box
        sx={{
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 5,
          margin: "auto",
          backgroundColor: "transparent",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            style={{ background: "white" }}
            variant="filled"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            style={{ background: "white" }}
            variant="filled"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#edc967" }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="/forgetpassword"
                variant="body2"
                style={{ color: "black" }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2" style={{ color: "black" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default SignIn;
