import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shoppage/shoppage.component";
import './App.css';

import Header from "./components/header/header.component";
import SignInAndSignUpPage from './page/sign-in-and-sign-up-page/sigin-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { setCurrentUser } from "./redux/user/user.actions";
import SignIn from "./components/sign-in/sign-in.component";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUSer } from "./redux/user/user.selector";

function App({currentUser, setCurrentUser}) {
  console.log(currentUser);
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
    
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signIn' element={currentUser ? <Navigate to="/?" /> : <SignInAndSignUpPage />} />
      </Routes>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUSer
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
