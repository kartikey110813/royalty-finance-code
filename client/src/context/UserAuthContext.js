import { createContext, useState, useContext, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    sendEmailVerification
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvidor({children}) {
const [user,setUser] = useState("");
const navigate = useNavigate()
    const  signup = async (data) => {
        return createUserWithEmailAndPassword(auth,data.email,data.password).then(()=> {
            sendEmailVerification(auth.currentUser)
            .then(async ()=>{
                alert("Verification sent")
        const userCollectionRef = doc(db,'users',auth.currentUser.uid);
        await setDoc(userCollectionRef,data);
            })
            .catch((err)=>{
                console.error(err)
            })
        })
    }
    function login(email, password) {
            console.log("hello")
            return signInWithEmailAndPassword(auth,email,password)
            .then((result)=> {
                if(auth.currentUser.emailVerified != true) {
                        alert("Your email is not verified");
                        return signOut(auth);
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }
    function logOut() {
        return signOut(auth);
    }
    function passwordResetMail(email) {
        return sendPasswordResetEmail(auth,email)
    }

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
                console.log("Auth", currentuser);
                setUser(currentuser);

              });
        return () => {
            unsubscribe();
        }
    },[])
    return (
        <userAuthContext.Provider value={{user,signup,login,logOut,passwordResetMail}}>
            {children}
        </userAuthContext.Provider>
    )
}
export function useUserAuth() {
    return useContext(userAuthContext);
}