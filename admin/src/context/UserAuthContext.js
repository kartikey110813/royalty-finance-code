// import { createContext, useState, useContext, useEffect } from "react";
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged,
//     sendPasswordResetEmail,
//     sendEmailVerification

// } from "firebase/auth";
// import { auth } from "../firebase";
// const userAuthContext = createContext();

// export function UserAuthContextProvidor({children}) {
// const [user,setUser] = useState("");

//     function signup(email, password) {
//         return createUserWithEmailAndPassword(auth,email,password).then(()=> {
//             sendEmailVerification(auth.currentUser)
//             .then(()=>{
//                 alert("Verification sent")
//             })
//             .catch((err)=>{
//                 console.error(err)
//             })
//         })
//     }
//     function login(email, password) {
//         return signInWithEmailAndPassword(auth,email,password)
//         .then((res) => {
//             console.log(res);
//         })

//     }
//     function logOut() {
//         return signOut(auth);
//     }
//     function passwordResetMail(email) {
//         return sendPasswordResetEmail(auth,email)
//     }

//         useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
//             if(currentUser)
//                 setUser(currentUser);
//         });
//         return () => {
//             unSubscribe();
//         }
//     },[])
//     return (
//         <userAuthContext.Provider value={{user,signup,login,logOut,passwordResetMail}}>
//             {children}
//         </userAuthContext.Provider>
//     )
// }
// export function useUserAuth() {
//     return useContext(userAuthContext);
// }