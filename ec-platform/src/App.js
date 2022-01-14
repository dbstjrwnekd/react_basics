import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shoppage/shoppage.component";
import './App.css';

import Header from "./components/header/header.component";
import SignInAndSignUpPage from './page/sign-in-and-sign-up-page/sigin-in-and-sign-up-page.component';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signIn' element={<SignInAndSignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
