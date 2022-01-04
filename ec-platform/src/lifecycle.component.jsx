import React from "react";

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log("constructor!");
  }

  componentDidMount() {
    console.log("componentDidMount!");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate!");
    return this.props.text !== nextProps.text;
  }

  render() {
    console.log("render!");
    return (
      <div className="lifecycle">
        <h3>LIFECYCLE COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
