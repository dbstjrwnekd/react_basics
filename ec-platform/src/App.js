import React, { useState } from "react";
import Lifecycles from "./lifecycle.component";
import logo from "./logo.svg";
import "./App.css";

function App({ text }) {
  const [showChild, setShowChild] = useState(true);
  const [myText, setMyText] = useState(text);

  function toggleClick() {
    setShowChild(() => !showChild);
  }

  function handleClick() {
    setMyText(myText + "_handle");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toggleClick}>Toggle Lifecycles</button>
        <button onClick={handleClick}>Update Text</button>
        {showChild ? <Lifecycles text={myText} /> : null}
      </header>
    </div>
  );
}

export default App;
