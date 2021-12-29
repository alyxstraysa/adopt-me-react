const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),

    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Squwak",
      animal: "Parrot",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Meow", animal: "Cat", breed: "Persian" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
