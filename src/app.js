import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title!");
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Finn" animal="Dog" breed="Mix" />
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Lucy" animal="Dog" breed="Labrador" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
