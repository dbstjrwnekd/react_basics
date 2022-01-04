import React from "react";
import Lifecycles from "./lifecycle.component";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
      text: "",
    };
  }

  handleClick = () => {
    this.setState((state) => {
      return { text: state.text + "_hello" };
    });
  };

  toggleClick = () => {
    this.setState((state) => ({ showChild: !state.showChild }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.toggleClick}>Toggle Lifecycles</button>
          <button onClick={this.handleClick}>Update Text</button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
