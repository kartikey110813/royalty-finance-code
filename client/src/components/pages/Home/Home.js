import React, { useCallback, useContext } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../../../App.css";
import particlesOptions from "../../../particles.json";
import background from "../../../images/background.png";
import goldenbars from "../../../images/goldenbars.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import { Parallax, Background } from "react-parallax";
import LanguageContext from "../../../context/LanguageContext";
import Footer from "../Footer/Footer";
function Home() {
  const { language } = useContext(LanguageContext);

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <div className="App">
        <div style={{ height: "100vh" }}>
          <Particles
            style={{ height: "100vh" }}
            options={particlesOptions}
            init={particlesInit}
          />
          <header
            className="App-header"
            style={{
              background: "transparent",
              flexFlow: "column nowrap",
              gap: "2em",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                color: "#edc967",
                fontSize: "60px",
                margin: "auto",
                paddingTop: "5rem",
              }}
            >
              ROYALTY
            </p>
            {/* style={{ fontSize: "42px" }} */}
            <p style={{ fontSize: "30px", margin: "auto" }}>Finance Group</p>
            <hr className="goldline" style={{ margin: "auto" }} />
            <p>
              <Link
                className={"button contactButton"}
                style={{ margin: "auto" }}
                to={"/invest"}
              >
                {language === "en" ? "Find out more" : "ZISTIŤ VIAC"}
              </Link>
            </p>
            <p>
              {language === "en"
                ? "We help your Capital to Grow"
                : "Pomáhame vášmu kapitálu rásť"}
            </p>
          </header>
        </div>
        <section className="showcase" style={{ height: "100vh" }}>
          <img src={background} alt={"bg"} style={{ objectFit: "fill" }} />
          <div
            className={"overlay"}
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "16vh",
            }}
          >
            <div>
              <h2>Royalty Finance Group</h2>
              <hr className="goldline" />
              <div
                style={{
                  overflow: "auto",
                  margin: "auto",
                  marginBottom: "2em",
                  width: "70%",
                  fontSize:"1.3rem"
                }}
              >
                {language === "en"
                  ? "We are a management company operating in the financial market. We provide property management. Our investment portfolio consists of segments that we manage ourselves. We create space for partnership with start-up companies. Professional knowledge incorporated into a quality system makes us the market leader. Thanks to our partner companies, we operate throughout Europe, which gives us the necessary overview and opportunities to incorporate each product or service for which we provide a report. ROYALTY Finance group professionally integrated professional approach."
                  : "Sme Správcovská spoločnosť pôsobiaca na trhu financií. Poskytujeme správu majetku. Investičné portfólio tvoríme zo segmentov ktoré sami riadime. Vytvárame priestor pre partnerstvo začínajúcim spoločnostiam. Odborné znalosti zapracované do kvalitného systému z nás robí lídrom na trhu. Vďaka našim partnerským spoločnostiam pôsobíme na území celej Európy, čo nám dáva potrebný rozhľad a možnosti zapracovania každého produktu či služby pre ktorú poskytujeme správu. ROYALTY Finance group profesionálne zapracovaný odborný prístup. Ste pripravený začať investovať?"}
              </div>
            </div>
          </div>
        </section>

        <section
          className="showcase"
          style={{ height: "70vh", backgroundColor: "rgb(27, 36, 44)" }}
        >
          <Parallax
            blur={{ min: -10, max: 15 }}
            bgImage={goldenbars}
            bgImageAlt="the dog"
            strength={-200}
            style={{
              zIndex: "999",
              height: "70vh",
              position: "relative",
            }}
            bgImageStyle={{ objectFit: "cover" }}
          >
            <div className={"goldenbarsoverlay"} style={{ height: "70vh" }}>
              <div
                style={{
                  display: "flex",
                  gap: "100px",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h2>
                  {language === "en"
                    ? "Are you ready to start investing?"
                    : "Ste pripravený začať investovať?"}
                </h2>
                <div>
                  <Link className={"button contactButton"} to={"/contact"}>
                    {language === "en" ? "Contact Us" : "KONTAKTUJTE NÁS"}
                  </Link>
                </div>
              </div>
            </div>
          </Parallax>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
