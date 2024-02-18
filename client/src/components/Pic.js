import React, { useEffect, useRef, useState, useContext } from 'react'
import Webcam from 'react-webcam'
import LanguageContext from '../context/LanguageContext';

const Pic = () => {
  const webRef = useRef(null);
  const [imageLive, setImageLive] = useState(null)
  const getImage = () => {
    const imgUrl = webRef.current.getScreenshot()
    setImageLive(imgUrl);
  }
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <h1>Selfie App in react</h1>
      <Webcam ref={webRef} />
      <button onClick={getImage}>Click Photo</button>
      <img src={imageLive} />
    </div>
  )
}

export default Pic