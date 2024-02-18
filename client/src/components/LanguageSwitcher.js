import React, { useContext } from "react";

import LanguageContext from "../context/LanguageContext";
import sk from '../images/sk/favicon-16x16.png'
import en from '../images/en/favicon-16x16.png'

const LanguageSwitcher = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        <div >
            <div style={{ float: 'left' }}>
                {language === "en" ?
                    <img src={sk} alt='sk' style={{ borderRadius: '100%' }} /> :
                    <img src={en} alt='en' style={{ borderRadius: '100%' }} />}
            </div>
            <div style={{ float: 'right' }}>
                <button onClick={() => setLanguage(language === "sk" ? "en" : "sk")} style={{ color: '#edc967', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>

                    {language === "en" ? 'English' : 'Slovenčina'}
                </button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
