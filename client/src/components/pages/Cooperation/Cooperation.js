import React, { useContext } from 'react'
import teamwork from '../../../images/teamwork.jpg'
import './Cooperation.css'
import { Link } from 'react-router-dom'
import architect from '../../../images/architect.jpg'
import capitalmarket from '../../../images/pexels-alesia.jpg'
import drawing from '../../../images/technical-drawing.jpg'
import bride from '../../../images/bride.jpg'
import Footer from '../Footer/Footer'
import LanguageContext from "../../../context/LanguageContext";
function Cooperation() {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <div>
            <div style={{height:"75vh",width:"100%",overflow:"hidden", marginTop:"1%"}}>
            <img src={teamwork} alt={"bg"} style={{width:"100%"}}/>
          </div>
                <section class="bgabout">
                    <h1><strong>{language === "en" ? "Cooperation" : "Spolupráca"}</strong></h1>
                    <hr className='goldline' />
                    <div style={{ overflow: "auto", margin: "auto", marginBottom: '2em', width: '70%',fontSize:"1.3rem" }}>
                        {language === "en" ? "ROYALTY Finance Group is a group of experts from various segments, thanks to which we can focus on a larger range of products or services on the market. It is precisely thanks to a sufficient range of professional expertise and a constantly growing appetite for entrepreneurship that we will successfully implement your project together. Send us the registration form together with the presentation of your project. We are glad that you trust us." : "ROYALTY Finance Group je zoskupenie odborníkov z rôznych segmentov vďaka čomu sa môžeme zamerať na väčší okruh produktov či služieb na trhu. Práve vďaka dostatočnému rozhladu profesionálnej odbornosti a neustále rastúcou chuťou k podnikaniu Váš projekt spoločne úspešne zrealizujeme. Zašlite nám registračný formulár spolu s predstavením Vášho projektu. Sme radi že nám dôverujete."}

                    </div>

                    <Link className={'button'} style={{ margin: "3em" }} to={'/contact'}>
                        {language === "en" ? "I am interested in cooperation" : "MÁM ZÁUJEM"}
                    </Link>
                </section>
                <section>
                    <div class="main">
                        <ul class="cards">
                            <li class="cards_item">
                                <div class="card">
                                    <div class="card_image"><img src={drawing} alt="imgs" /></div>
                                    <div class="card_content">
                                        <h2 class="card_title">{language === "en" ? "We are not afraid of innovation" : "Nebojíme sa inovácií"}
                                        </h2>
                                        <hr className='goldline' style={{ marginLeft: 0 }} />
                                        <p class="card_text">{language === "en" ? "We are looking for ways to advance and conquer new areas of the market.Life is change" : "Hľadáme spôsoby, ako napredovať a dobývať nové oblasti trhu. Život je zmena."}</p>
                                    </div>
                                </div>
                            </li>
                            <li class="cards_item">
                                <div class="card">
                                    <div class="card_image"><img src={architect} alt="imgs" /></div>
                                    <div class="card_content">
                                        <h2 class="card_title">{language === "en" ? "Development Projects" : "Developerské projekty"}
                                        </h2>
                                        <hr className='goldline' style={{ marginLeft: 0 }} />
                                        <p class="card_text">{language === "en" ? "We hand-select development projects that have potential." : "Ručne vyberáme developerské projekty, ktoré majú potenciál."}

                                        </p>

                                    </div>
                                </div>
                            </li>
                            <li class="cards_item">
                                <div class="card">
                                    <div class="card_image"><img src={bride} alt="imgs" /></div>
                                    <div class="card_content">
                                        <h2 class="card_title">{language === "en" ? "Your story" : "Váš Príbeh"}
                                        </h2>
                                        <hr className='goldline' style={{ marginLeft: 0 }} />
                                        <p class="card_text">{language === "en" ? "We will push you to get started and survive in the race with the competition." : "Potlačíme vás, aby sme vás naštartovali a aby ste obstáli v pretekoch s konkurenciou."}
                                        </p>

                                    </div>
                                </div>
                            </li>
                            <li class="cards_item">
                                <div class="card">
                                    <div class="card_image"><img src={capitalmarket} alt="imgs" /></div>
                                    <div class="card_content">
                                        <h2 class="card_title">{language === "en" ? "Capital market" : "Kapitalové Trhy"}
                                        </h2>
                                        <hr className='goldline' style={{ marginLeft: 0 }} />
                                        <p class="card_text">{language === "en" ? "An experienced team of market analysts will ensure that your finances gradually grow and multiply." : "Skúsený tím analytikov trhu sa postará o to, aby vaše financie postupne rástli a znásobovali sa."}

                                        </p>

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )

}

export default Cooperation