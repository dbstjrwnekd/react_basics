import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDBnTvM2-Zi6VEM_uTxHkYeqXChxv-ieXg",
    authDomain: "crown-db-dd656.firebaseapp.com",
    projectId: "crown-db-dd656",
    storageBucket: "crown-db-dd656.appspot.com",
    messagingSenderId: "788759813164",
    appId: "1:788759813164:web:65f16654a9dd05f6098589",
    measurementId: "G-EVB9DB7FPQ"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
auth.languageCode = 'it';
export const signInWithGoogle = () => signInWithPopup(auth, provider);
