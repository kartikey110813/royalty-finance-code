import React, { useContext } from "react";
import "./Affiliate.css";
import Footer from "../Footer/Footer";
import LanguageContext from "../../../context/LanguageContext";
import AffiliateImg from "../../../images/Affiliate.svg"
function Affiliate() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div>
        <section class="showcase">
          <img src={AffiliateImg}/>
        </section>
        <section class="bgabout">
          <h1 style={{ marginTop: "3rem" }}>
            <strong>{language === "en"
              ? "Affiliate Partnership"
              : "Affiliate partnerstvo"}
              </strong></h1>
          <hr className="goldline" />
          <div
            style={{
              overflow: "auto",
              margin: "auto",
              marginTop: "5rem",
              marginBottom: "10rem",
              width: "70%",
              fontSize:"1.3rem"
            }}
          >
            {language === "en"
              ? "We offer money per closed trade, that is, a client who successfully verifies the documents and makes a deposit,and activates the RFG product. We offer a 5% payout every week on Monday"
              : "Ponúkame peniaze za uzavretý obchod, teda klientovi, ktorý úspešne overí doklady a vloží vklad, a aktivuje produkt RFG. Ponúkame 5% výplatu každý týždeň v pondelok"}
                 <h5><strong>Please Sign In to become the affiliate!</strong></h5>
              </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Affiliate;
