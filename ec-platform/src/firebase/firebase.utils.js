import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { getFirestore, doc, addDoc, getDoc, collection, getDocs, writeBatch, onSnapshot } from "firebase/firestore";

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(database, collectionKey);

  const batch = writeBatch(database);

  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const getCollectionDatas = async (collectionKey) => {
  const collections = {};
  const collectionRef = collection(database, collectionKey);
  const collectionSnapshot = await getDocs(collectionRef);
  
  collectionSnapshot.forEach(doc => {
      const { title, items } = doc.data();
      collections[title.toLowerCase()] = {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  return collections;
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
auth.languageCode = 'it';
export const signInWithGoogle = () => signInWithPopup(auth, provider);
