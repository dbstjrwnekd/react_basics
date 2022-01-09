import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shoppage/shoppage.component";
import './App.css';

import Header from "./components/header/header.component";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
