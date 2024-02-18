import React, { useContext } from 'react'
import chartman from '../../../images/business-charts-man.png'
import './Invest.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import LanguageContext from "../../../context/LanguageContext";

function Invest() {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <div>
            <div style={{height:"75vh",width:"100%",overflow:"hidden", marginTop:"1%"}}>
            <img src={chartman} alt={"bg"} style={{width:"100%"}}/>
          </div>
                <section class="bgabout">
                    <h1 style={{ marginTop: '3rem' }}>{language === "en" ? "" : ""}<strong>RFG</strong></h1>
                    <hr className='goldline' />
                    <div style={{ overflow: "auto", margin: 'auto', marginTop: '5rem', marginBottom: '10rem', width: '70%',fontSize:"1.3rem" }} >
                        {language === "en" ? "RFG investment opportunity for everyone without distinction. Nowadays, it is necessary to create an investment portfolio for financial stability, a more comfortable life and, last but not least, for more time for your interests. ROYALTY Finance Group has prepared a product for you that will introduce you to the world of professional investing without the necessary knowledge or education. We are your guide on the investment journey." : "RFG možnosť investovania pre každého bez rozdielu. V dnešnej dobe je potrebné aby sme si vytvárali investičné portfólio pre finančnú stabilitu, pohodlnejší život a v neposlednom rade pre viac času na Vaše záujmy. ROYALTY Finance Group pripravilo pre Vás produkt ktorý Vás uvedie do sveta profesionálneho investovania bez potrebných znalostí či vzdelania. Sme vašim sprievodcom na ceste investícií."}
                    </div>
                    <div className='elementmain'>
                        <div className='element-flow elementor-shape-top'>
                            <svg style={{ marginTop: '-10px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path className="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className='growthrate'>
                                {language === "en" ? "RFG 1.2% per month" : "RFG 1.2% mesačne "}
                            </h1>
                        </div>
                        <div className='element-flow elementor-shape-bottom'>
                            <svg style={{ marginBottom: '-10px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path className="elementor-shape-fill" d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
                            </svg>
                        </div>

                    </div>
                    <div style={{ margin: "auto", marginTop: '5em', overflow: "auto", marginBottom: '2em', width: '70%',fontSize:"1.3rem" }}>
                        {language === "en" ? "Based on hand-picked projects and businesses in which we invest. We are familiar with the financial markets, in which we have been operating for years, and thanks to this we are able to return you 1.2% per month. It is a win-win situation where we can also invest in your projects and thus bring profit to you and our clients." : "Investičný produkt pre každého, do ktorého je možné investovať od 100€ s mesačným výnosom 1.2% s 12 mesačnou viazanosťou. RFG produkt sa skladá zo správy nehnuteľností, investičneho portfólia na finančných trhoch, nákupom fyzických komodít a v neposlednom rade práve z Vás a vašich projektov ktoré spoločne vytvárame. "}
                    </div>
                 

                   
                </section>
                <section className="bgabout" style={{ alignContent: "center" }}>
                <h1><strong>{language === "en" ? "Why invest" : "Prečo Investovať"}</strong></h1>
                <hr className="goldline" style={{ width: "4rem" }} />
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
                    ? "Based on hand-picked projects and businesses in which we invest. We are familiar with the financial markets, in which we have been operating for years, and thanks to this we are able to return you 1.2% per month. It is a win-win situation where we can also invest in your projects and thus bring profit to you and our clients."
                    : "Na základe ručne vybráme projekty a spoločnosti, do ktorých investujeme. Poznáme finančné trhy, na ktorých už roky pôsobíme, a vďaka tomu sme schopní priniesť vám výnos 1,2 % mesačne. Je to obojstranne výhodná situácia, keď môžeme investovať aj do vašich projektov a prinášať tak zisk vám aj našim klientom."}
                </div>
                <h1>
                {language === "en" ? "Start investing!" : "Začnite Investovať!"}

            </h1>
                <h1><strong>
                  {language === "en"
                    ? "Don't hesitate and register today"
                    : "Neváhajte a zaregistrujte sa ešte dnes"}
      
                  <hr className="goldline" style={{ width: "4rem" }} />
                  </strong></h1>
      
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
    )
}

export default Invest