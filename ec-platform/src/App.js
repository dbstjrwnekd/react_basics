import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop/hats' element={<HatsPage />} />
    </Routes>
  );
}

export default App;
