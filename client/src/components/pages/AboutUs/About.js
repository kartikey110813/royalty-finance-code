import React, { useContext } from "react";
import suit from "../../../images/unsplash-scaled-suit.jpg";
import "./About.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import LanguageContext from "../../../context/LanguageContext";
import Grid from "@mui/material/Grid";
function About() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div>
        <div style={{height:"75vh",width:"100%",overflow:"hidden", marginTop:"1%"}}>
          <img src={suit} alt={"bg"} style={{width:"100%"}}/>
        </div>

        <section className="bgabout">
        <h1>  <strong>{language === "en" ? "About us" : "O Nás"}</strong></h1>
          <hr className="goldline" style={{ width: "4rem" }} />

          <div
            style={{
              display: "flex",
              flexFlow: "row",
            //   alignItems: "center",
              margin: "auto",
            }}
          >
            <Grid container spacing={1} style={{ margin: "auto" }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div
                  className={"aboutleft"}
                  style={{
                    // textAlign: "center",
                    display: "flex",
                    justifyContent:"space-around",
                    flexDirection: "column",
                    // alignItems: "center",
                    overflow: "auto",
                    margin: "auto",
                    marginBottom: "2em",
                  }}
                >
                  {language === "en" ? (
                    <>
                      <Grid container style={{width:"70%", margin:"auto"}}>
                        <Grid item xs={3}>
                          <p>Currently Invested</p>
                        </Grid>
                        <Grid item xs={3}>
                          <p>Revenues</p>
                        </Grid>
                        <Grid item xs={3}>
                          <p>Projects</p>
                        </Grid>
                        <Grid item xs={3}>
                          <p>
                            Operations
                          </p>
                        </Grid>
                      </Grid>
          <hr className="goldline" style={{ width: "70%" }} />

                      <Grid container style={{width:"70%", margin:"auto"}}>
                      <Grid item sm={3}>
                        <p>€21,435,000</p>
                      </Grid>
                      <Grid item sm={3}>
                        <p>€257,220</p>
                      </Grid>
                      <Grid item sm={3}>
                        <p>17</p>
                      </Grid>
                      <Grid item sm={3}>
                        <p>
                          Slovak Republic <br /> Czech Republic <br />
                          Germany <br /> Austria <br /> Netherlands
                        </p>
                      </Grid>
                    </Grid>
                    </>
                  ) : (
                    <>
                      <p>Aktuálne Investovaných: 21,435,000€</p>
                      <p>Výnosy: 257,220€</p>
                      <p>Projekty: 17</p>
                      <p>
                        Pôsobenie: Slovenská Republika, česko, Nemecko, Rakusko,
                        Holandsko
                      </p>
                    </>
                  )}
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ backgroundColor: "transparent" }}
              >
                <div
                  style={{
                    padding: "3em",
                    display: "flex",
                    overflow: "auto",
                    margin: "auto",
                    marginBottom: "2em",
                    fontSize: "1.5em",
                  }}
                >
                  {language === "en"
                    ? `ROYALTY Finance is a Central European investment group founded in 2022.
                                        Today it focuses on long-term investments in the healthcare sector,
                                        financial services, manufacturing, retail, media and real estate
                                        development. Royalty Finance is one of the largest employers in
                                        region. The group operates in more than 10 countries in Europe and has offices in
                                        Prague, Bratislava
                                        With different segments of professional experts, we form a leading group
                                        in the market.
                                        We have built a portfolio of strong products and offer our clients
                                        Investment management in our RFG product and individual asset management.
                                        Our clients are investors from many European countries. Sales
                                        financial products through our network of financial
                                        intermediaries and by working with major international financial
                                        institutions.`
                    : `ROYALTY Finance je stredoeurópska investičná skupina založená v roku
2022. Dnes sa zameriava na dlhodobé investície do zdravotníctva,
finančných služieb, výroby, maloobchodu, médií a realitného
developmentu. Royalty Finance je jedným z najväčších zamestnávateľov v
regióne. Skupina pôsobí vo viac ako 10 krajinách Európy a má pobočky v
Prahe, Bratislave
Vďaka rôznym segmentom profesionalnych odborníkov tvoríme skupinu lídra
na trhu.
Vybudovali sme portfólio silných produktov a svojim klientom ponúkame
správu investícií v našom produkte RFG a individuálnu správu aktív.
Našimi klientmi sú investori z mnohých európskych krajín. Predaj
finančných produktov uskutočňujeme prostredníctvom siete finančných
sprostredkovateľov a spoluprácou s významnými medzinárodnými finančnými
inštitúciami.`}
                </div>
              </Grid>
            </Grid>
          </div>
          <Link
          className={"button contactButton"}
          style={{ margin: "3em" }}
          to={"/signin"}
        >
          {language === "en" ? "Sign Up" : "Prihlásiť Sa"}
        </Link>
        </section>
     
      </div>
      <Footer />
    </>
  );
}

export default About;
