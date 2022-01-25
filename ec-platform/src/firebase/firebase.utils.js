import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { getFirestore, doc, addDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBnTvM2-Zi6VEM_uTxHkYeqXChxv-ieXg",
  authDomain: "crown-db-dd656.firebaseapp.com",
  projectId: "crown-db-dd656",
  storageBucket: "crown-db-dd656.appspot.com",
  messagingSenderId: "788759813164",
  appId: "1:788759813164:web:65f16654a9dd05f6098589",
  measurementId: "G-EVB9DB7FPQ"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData=null) => {
  if(!userAuth) return;

  const userRef = doc(database, 'user', userAuth.uid);

  const snapShot = await getDoc(userRef);
  if(!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(displayName, email, createdAt);
    try {
      await addDoc(userRef, {
          displayName,
          email,
          createdAt,
          ...additionalData
      });
    }catch(e) {
        console.log('error creating user', e.message);
    }
  }

  return userRef;
};



const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
auth.languageCode = 'it';
export const signInWithGoogle = () => signInWithPopup(auth, provider);
