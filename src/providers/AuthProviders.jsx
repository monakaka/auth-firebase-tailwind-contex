import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebas.init';

export const AuthContext = createContext(null);

const auth = getAuth(app);

function AuthProviders({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create register user 

    const createUser = (name, email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 
    const loginUser = (email, password) => {
        // console.log(email, password);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out or signout
    const logOutUser = () => {
        // setUser(null)
        return signOut(auth);
    }


    // observe auth state change

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth state change:', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => (
            unsubscribe()
        )
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProviders;