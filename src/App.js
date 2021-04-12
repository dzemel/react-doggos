import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import NavBar from "./NavBar";
import DogDetail from "./DogDetail";
import whiskey from "./images/whiskey.jpg";
import perry from "./images/perry.jpg";
import tubby from "./images/tubby.jpg";
import duke from "./images/duke.jpg";
import "./App.css";

//Bonus: is there a way to get the current dog before you render
//the component, passing dog instead of the entire list of dog 
//data?
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar names={props.dogs.map((dog) => dog.name)} className="Nav" />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={props.dogs}/>
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetail dogs={props.dogs} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: "5",
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
