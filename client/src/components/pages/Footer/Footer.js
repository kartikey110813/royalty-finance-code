import React, { useContext } from "react";
import './Footer.css'
import { Link } from "react-router-dom"
import logo from '../../../images/logo.jpg'
import Grid from '@mui/material/Grid';
import LanguageSwitcher from "../../LanguageSwitcher";
import LanguageContext from "../../../context/LanguageContext";
function Footer() {

    const { language } = useContext(LanguageContext);

    return (
        <div className="Footer" style={{ margin: 'auto' }}>
            <div className="footerbar-container container">
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={2} md={1} lg={1} style={{ backgroundColor: 'transparent', flexFlow: 'row wrap' }}>

                        <Link to="/" className={'footer-links'} >
                            {language === "en" ? "Home" : "Úvod"}
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2} md={1} lg={1} style={{ backgroundColor: 'transparent', flexFlow: 'row wrap' }}>

                        <Link
                            to="/aboutus"
                            className={'footer-links'}
                        >
                            {language === "en" ? "About Us" : "O Nás"}
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2} md={1} lg={1} style={{ backgroundColor: 'transparent', flexFlow: 'row wrap' }}>

                        <Link
                            to="/invest"
                            className={'footer-links'}
                        >
                            {language === "en" ? "Invest" : "Investovať"}
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2} md={1} lg={1} style={{ backgroundColor: 'transparent', flexFlow: 'row wrap' }}>

                        <Link
                            to="/cooperation" className={'footer-links'}
                        >
                            {language === "en" ? "Cooperation" : "Spolupráca"}
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2} md={1} lg={1} style={{ backgroundColor: 'transparent', flexFlow: 'row wrap' }}>

                        <Link
                            to="/contact" className={'footer-links'}
                        >
                            {language === "en" ? "Contact" : "Kontakt"}
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2} md={1} lg={1} style={{ backgroundColor: 'transparent', flexFlow: 'row wrap' }}>

                        <Link
                            className={'footer-links'}
                            to="/signin"
                        >
                            {language === "en" ? "Sign in" : "Prihlásenie"}
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2} md={1} lg={1} style={{ backgroundColor: 'transparent', flexFlow: 'row wrap' }}>

                        <Link to="/" className="footerbar-logo" >
                            <img src={logo} alt={"logo"} width={"150px"} />
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2} md={1} lg={1} style={{ backgroundColor: 'transparent', margin: 'auto', }}>
                        <Link to="/" className="footerbar-logo" style={{ whiteSpace: 'nowrap', flexFlow: 'row wrap' }}>
                            <div style={{
                                color: "white", display: 'inline-block', whiteSpace: 'wrap'
                            }}><div>{language === "en" ? "Designed by:" : "Navrhol"}</div>
                                <div style={{ color: "#edc967", whiteSpace: 'nowrap' }}>  Adam Jakubovič </div>
                                <div style={{ color: "#edc967", whiteSpace: 'nowrap' }}>  & Carson Rodrigues </div>
                            </div>
                        </Link>
                    </Grid>

                </Grid>
                {/* <ul className={"footer-menu"}>

                    <li className="footer-item">
                        <Link to="/" className={'footer-links'} >
                            Home
                        </Link>
                    </li>

                    <li className="footer-item">
                        <Link
                            to="/aboutus"
                            className={'footer-links'}
                        >
                            About Us
                        </Link>
                    </li>

                    <li className="footer-item">
                        <Link
                            to="/invest"
                            className={'footer-links'}
                        >
                            Invest
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link
                            to="/cooperation" className={'footer-links'}
                        >
                            Cooperation
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link
                            to="/contact" className={'footer-links'}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link
                            className={'footer-links'}
                            to="/signin"
                        >
                            Sign in
                        </Link>
                    </li>
                    <li >
                        <Link to="/" className="footerbar-logo" >
                            <img src={logo} alt={"logo"} width={"60px"} />
                        </Link>
                    </li>
                    <li style={{ paddingLeft: '100px' }}>
                        <Link to="/" className="footerbar-logo" ><span style={{ color: "white" }}>Designed by:</span><span style={{ justifyContent: 'center', color: "#edc967" }}> Carson Rodrigues</span>
                        </Link>
                    </li>
                </ul> */}

            </div>
        </div>
    )
}

export default Footer