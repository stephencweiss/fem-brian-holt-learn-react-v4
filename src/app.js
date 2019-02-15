const React = require('React');

// Create a class, App
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

// class component
class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Finn",
        animal: "Dog",
        breed: "Mix"
      }),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Lucy",
        animal: "Dog",
        breed: "Labrador"
      })
    ]);
  }
}

// Create an instance of my class
ReactDOM.render(React.createElement(App), document.getElementById("root"));