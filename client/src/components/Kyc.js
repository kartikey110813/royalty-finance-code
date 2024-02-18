import React, { useState, useRef, useContext } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { v4 } from 'uuid'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase'
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import Webcam from 'react-webcam';
import LanguageContext from '../context/LanguageContext';

function Kyc() {

    const { language } = useContext(LanguageContext);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);

    const { login, user } = useUserAuth()
    const webRef = useRef(null);
    const [imageLive, setImageLive] = useState(null)
    const getImage = () => {
        const imgUrl = webRef.current.getScreenshot()
        setImageLive(imgUrl);
        console.log(imageLive)

    }
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (file1 == null || file2 == null || imageLive == null) {
            console.log("empty")
            return;
        }
        const imageRef1 = ref(storage, `document1/${file1.name + v4()}`)
        const imageRef2 = ref(storage, `document2/${file2.name + v4()}`)


        uploadBytes(imageRef1, file1).then((img) => {
            console.log("uploaded successfully")
            getDownloadURL(imageRef1).then(async (url) => {
                const userCollectionRef = doc(db, 'users', user.uid);
                console.log(url)
                await updateDoc(userCollectionRef, {
                    Document1: url
                }).then((res) => {
                    alert("Uploaded")
                    console.log("uploaded")
                })
                    .catch(err => {
                        console.log(err)
                    });
            })
        })
        uploadBytes(imageRef2, file2).then((img) => {
            console.log("uploaded successfully")
            getDownloadURL(imageRef2).then(async (url) => {
                console.log(url)
                const userCollectionRef = doc(db, 'users', user.uid);
                await updateDoc(userCollectionRef, {
                    Document2: url
                });
            })
        })

        const userCollectionRef = doc(db, 'users', user.uid);
        await updateDoc(userCollectionRef, {
            Document3: imageLive
        }).then((result) => {
            alert("Uploaded")
            console.log("src updated");
        })

    };
    return (
        <div style={{ width: "20%", align: "center", margin: "auto" }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingBottom: 5,
                    backgroundColor: 'transparent'
                }}
            >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <h1 style={{ color: '#fff' }}>{language === 'en' ? "Document 1" : "dokument 1"}</h1>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Document1"
                        type="file"
                        autoComplete="Document 1"
                        autoFocus
                        style={{ background: 'white' }}
                        onChange={(event) => { setFile1(event.target.files[0]) }}
                    />
                    <h1 style={{ color: '#fff' }}>{language === 'en' ? "Document 2" : "dokument 2"}</h1>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="file"
                        id="Document2"
                        autoComplete="Document 2"
                        style={{ background: 'white' }}
                        onChange={(event) => { setFile2(event.target.files[0]) }}
                    />
                    {/* <h1 style={{ color: '#fff' }}>Live Photo</h1>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="file"
                        id="Livephoto"
                        autoComplete="Live Photo"
                        style={{ background: 'white' }}
                    /> */}
                    <h1 style={{ color: '#fff' }}>{language === 'en' ? "Live Photo" : "Živá fotografia"}</h1>
                    <div>
                        <Button onClick={handleOpen} style={{ background: 'white', margin: 'auto', marginTop: '1em', width: '100%' }}>{language === 'en' ? "Live Photo upload" : "živé odovzdanie fotografie"}</Button>
                        <Modal
                            style={{ overflow: "scroll" }}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 600,
                                height: 600,
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                            }}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {language === 'en' ? "Live Photo" : "Živá fotografia"}                             </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {language === 'en' ? "Please make sure your face clearly visible" : "Uistite sa, že je vaša tvár jasne viditeľná"}
                                </Typography>
                                <Webcam ref={webRef}
                                    height={200}
                                    screenshotFormat="image/jpeg"
                                    width={200}
                                    videoConstraints={{
                                        width: 200,
                                        height: 200,
                                        facingMode: "user"
                                    }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={getImage}
                                    sx={{ mt: 3, mb: 2, backgroundColor: '#edc967' }}
                                >
                                    {language === 'en' ? "Click Image" : "kliknite na obrázok"}
                                </Button>
                                <img src={imageLive} style={{ height: "200", width: "200" }} />
                                {
                                    webRef && <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        onClick={handleClose}
                                        sx={{ mt: 3, mb: 2, backgroundColor: '#edc967' }}
                                    >
                                        {language === 'en' ? "Upload Image" : "Nahrať obrázok"}
                                    </Button>
                                }
                            </Box>
                        </Modal>
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#edc967' }}
                    >
                        {language === 'en' ? "Submit" : "Predložiť"}
                    </Button>

                </Box>
            </Box>
        </div>
    )
}

export default Kyc