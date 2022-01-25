import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shoppage/shoppage.component";
import './App.css';

import Header from "./components/header/header.component";
import SignInAndSignUpPage from './page/sign-in-and-sign-up-page/sigin-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

          console.log(currentUser);
        });
      }
    });
    setCurrentUser(null);
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signIn' element={<SignInAndSignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
