import React, { useRef, useState, useContext } from 'react'
import { storage } from '../../../firebase';
import { ref, uploadBytes } from "firebase/storage";
import Webcam from 'react-webcam';
import LanguageContext from '../../../context/LanguageContext';

import { v4 } from 'uuid';
const File = () => {
  const { language } = useContext(LanguageContext);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  }
  const webcamRef = useRef(null);

  const [file, setFile] = useState(null);
  const uploadImage = () => {
    if (file == null) return;
    const imgRef = ref(storage, `/document1/${file.name + v4()}`)
    uploadBytes(imgRef, file).then(() => {
      alert("image uploaded")
    })
      .catch((err) => {
        console.error(err);
      })
  }
  const livePhoto = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

  return (
    <div style={{ color: "white" }}>
      <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
      <button onClick={uploadImage}>Upload</button>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={livePhoto}>Take Live Photo</button>
      <canvas ref={webcamRef}></canvas>

    </div>

  )
}

export default File