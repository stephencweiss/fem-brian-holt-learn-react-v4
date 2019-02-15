// Create a class, App
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ])
}

const App = () => {
  return React.createElement("div", {},[
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: 'Finn',
      animal:'Dog',
      breed: 'Mix'
    }),
    React.createElement(Pet, {
      name: 'Luna',
      animal:'Dog',
      breed: 'Havanese'
    }),
    React.createElement(Pet, {
      name: 'Lucy',
      animal:'Dog',
      breed: 'Labrador'
    }),
  ])
}

// Create an instance of my class
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
)