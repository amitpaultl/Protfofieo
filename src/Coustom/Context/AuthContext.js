import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase'
import { createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app)
export const AuthProvider = createContext()

const AuthContext = ({ children }) => {

    // google provider
    const googleProvider = new GoogleAuthProvider()

    // set user
    const [user, setUser] = useState(null)

    // loading
    const [loading, setLoading] = useState(false)

    // Google SignIn
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Google Sing in
    const googleSingIn = () =>{
        setLoading(true)
        return  signInWithRedirect(auth,googleProvider)
    }

    // Email sing up 
    const emailSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //   Email Verify
    const emailVerify = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    //  Name Add 
    const UserNameAdd = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    // Email sign in
    const emailSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //  Logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    

    // currentUser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { signInWithGoogle, emailSignUp, emailVerify, UserNameAdd, emailSignIn, logOut,user,setUser,loading, setLoading,googleSingIn }
    return (
        <div>
            <AuthProvider.Provider value={authInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;