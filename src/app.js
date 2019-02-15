// Create a class, App
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Finn"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Lab-Mix"),
  ])
}

const App = () => {
  return React.createElement("div", {},[
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ])
}

// Create an instance of my class
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
)