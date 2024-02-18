import React, { useCallback, useState, useContext } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../../../App.css";
import particlesOptions from "../../../particles.json";
import "./SignUp.css";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import LanguageContext from "../../../context/LanguageContext";
import { db } from "../../../firebase";
import { Checkbox, Typography } from "@mui/material";

function SignUp() {
  const { language } = useContext(LanguageContext);
  var currentdate = new Date();
  const formRef = React.useRef();
  const [value, setValue] = useState();
  const [checkboxStatus, setCheckboxStatus] = useState(false)
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  const { signup } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get("phonenumber").length < 10) {
      alert(
        language === "en"
          ? "Enter proper phone number"
          : "Zadajte správne telefónne číslo"
      );
    }

    if (data.get("password") === data.get("repassword")) {
      try {
        await signup({
          name: data.get("name"),
          surname: data.get("surname"),
          phonenumber: value,
          email: data.get("email"),
          password: data.get("password"),
          isKycComplete: false,
          referredBy: data.get("referral"),

          date:
            currentdate.getDate() +
            "/" +
            (currentdate.getMonth() + 1) +
            "/" +
            currentdate.getFullYear(),
          bonus: 0,
          Document1: "",
          Document2: "",
          Document3: "",
        });
        navigate("/signin");
      } catch (err) {
        console.error(err);
      }
    } else {
      alert(
        language === "en"
          ? "Password and confirm password do not match"
          : "Heslo a potvrdenie hesla sa nezhodujú"
      );
      return;
    }
  };
  return (
    <>
      <div className="App">
        <div>
          <Particles options={particlesOptions} init={particlesInit} />
          <header className="App-header">
            <p
              style={{
                color: "#edc967",
                fontSize: "4rem",
                margin: "0px",
                paddingTop: "5rem",
              }}
            >
              {language === "en" ? "Sign up" : "Registrácia"}
              <hr className="goldline" />
            </p>
          </header>
        </div>

        <Box
          sx={{
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "transparent",
            paddingBottom: 5,
            paddingLeft: 4,
            paddingRight: 4,
            margin: "auto",
            marginTop: -10,
            width: "50%",
          }}
        >
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label={language === "en" ? "Name" : "Meno"}
              type="text"
              id="name"
              autoComplete="current-name"
              style={{ background: "white" }}
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="surname"
              label={language === "en" ? "Surname" : "Priezvisko"}
              type="text"
              id="Surname"
              autoComplete="current-surname"
              style={{ background: "white" }}
              variant="filled"
            />

            <PhoneInput
              placeholder="Enter phone number"
              label={language === "en" ? "phonenumber" : "Telefónne číslo"}
              name="phonenumber"
              value={value}
              onChange={setValue}
              style={{ backgroundColor: "white", padding: "20px" }}
            />

            <TextField
              margin="normal"
              fullWidth
              id="email"
              label={language === "en" ? "Email address" : "Email"}
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              style={{ background: "white" }}
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
              style={{ background: "white" }}
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repassword"
              label={language === "en" ? "Re-enter password" : "Potvrďte heslo"}
              type="password"
              id="repassword"
              style={{ background: "white" }}
              variant="filled"
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              name="referral"
              label={
                language === "en"
                  ? "Enter Referral Code"
                  : "Zadajte kód odporúčania"
              }
              type="text"
              id="referral"
              style={{ background: "white" }}
              variant="filled"
            />
            <Checkbox checked={checkboxStatus} onChange={(e) => {setCheckboxStatus(!checkboxStatus)}}/>
            <span> I agree with terms and conditions</span> <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, width: "10em", backgroundColor: "#edc967" }}
              style={{
                backgroundColor: "#edc967",
              }}
            >
              {language === "en" ? "Sign Up" : "Zaregistrovať sa"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/signin" variant="body2" style={{ color: "white" }}>
                  {language === "en"
                    ? "Already have an account? Sign In"
                    : "Máte už účet? Prihlásiť sa"}
                </Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
